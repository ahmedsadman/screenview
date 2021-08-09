const User = require('../models/user.model');
const Post = require('../models/post.model');
const Follower = require('../models/follower.model');
const postService = require('./post.service');

class UserService {
  async create(guid) {
    const user = new User({ guid });
    await user.save();
    return user;
  }

  async getUserPosts(userId) {
    const posts = await Post.find({ author: userId }).lean().exec();
    return posts;
  }

  async followUser(fromUserId, toUserId) {
    // fromUserId -> The user (follower)
    // toUserId -> The person the user wants to follow (followee)
    const follower = new Follower({ from: fromUserId, to: toUserId });
    await follower.save();
    return follower;
  }

  async getFollowees(userId) {
    const followees = await Follower.find({ from: userId }, 'to').populate('to').exec();
    return followees;
  }

  async getUserFeed(userId) {
    const posts = await postService.getPostsByFollowee(userId);
    return posts;
  }
}

module.exports = new UserService();
