const Post = require('../models/post.model');
const Comment = require('../models/comment.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

class PostService {
  async create(type, content, author) {
    const post = new Post({ type, content, author });
    return await post.save();
  }

  async getPostsByFollowee(userId) {
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: 'followers',
          localField: 'author',
          foreignField: 'to',
          as: 'rel'
        }
      },
      { $match: { 'rel.from': mongoose.Types.ObjectId(userId) }},
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
        }
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

  async addComment(post, author, content) {
    const comment = new Comment({ post, author, content });
    return await comment.save();
  }
}

module.exports = new PostService();
