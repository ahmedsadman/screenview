const Post = require('../models/post.model');
const Comment = require('../models/comment.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');
const notificationService = require('./notification.service');

class PostService {
  async create(authorGuid, data) {
    const { type, content, mediaId } = data;
    let rating = null;

    if (type === 'review') {
      rating = data.rating;
    }
    const user = await User.findOne({ guid: authorGuid }).lean().exec();
    const post = new Post({ type, content, author: user._id, rating, mediaId });
    return await post.save();
  }

  async getPostsByFollowee(userId) {
    const posts = await Post.aggregate([
      // match followee posts
      {
        $lookup: {
          from: 'followers',
          localField: 'author',
          foreignField: 'to',
          as: 'rel'
        }
      },
      { $match: { $or: [ 
        { 'rel.from': mongoose.Types.ObjectId(userId) }, 
        { author: userId }
      ] }},
      { $sort: { createdAt: -1 }},
      // Get first 2 comments
      {
        $lookup: {
          from: 'comments',
          as: 'comments',
          let: { post_id: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$post', '$$post_id'] }
              }
            },
            { $sort: { createdAt: -1 } },
            { $limit: 2 }
          ]
        },
      },
      // Get total comment count
      {
        $lookup: {
          from: 'comments',
          as: 'totalComments',
          let: { post_id: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$post', '$$post_id'] }
              }
            },
            {
              $group: {
                _id: 1,
                count: { $sum: 1 }
              }
            }
          ]
        },
      },
      {
        $project: {
          'rel': 0
        }
      }
    ]).exec();
    await User.populate(posts, { path: 'author', select: 'name email' });
    await User.populate(posts, { path: 'comments.author', select: 'name email createdAt' });
    return posts;
  }

  async addComment(postId, authorGuid, content) {
    const user = await User.findOne({ guid: authorGuid }).lean().exec();
    const post = await Post.findById(postId).lean().exec();
    const comment = new Comment({ post: postId, author: user._id, content });
    await comment.save();

    notificationService.create('postComment', {
      senderId: user._id,
      senderName: user.name,
      receiverId: post.author,
      eventName: 'postComment',
      post: postId
    });

    return comment;
  }
}

module.exports = new PostService();
