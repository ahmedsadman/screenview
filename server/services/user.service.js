const User = require('../models/user.model');
const Post = require('../models/post.model');
const Follower = require('../models/follower.model');
const postService = require('./post.service');
const { APIError } = require('../utils/errors')

class UserService {
  async create(guid) {
    const user = new User({ guid });
    await user.save();
    return user;
  }

  async getByGuid(guid) {
    const user = await User.findOne({ guid }).lean().exec();
    if (!user) {
      throw new APIError('User does not exist', 400);
    }
    return user;
  }
  
  async updateByGuid(guid, fields) {
    let updates = {
      email: fields.email ?? null,
      name: fields.name ?? null,
      avatar_url: fields.avatar_url ?? null
    }
    const user = await User.findOneAndUpdate({ guid }, updates, { new: true });
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

  async addToWatchList(userId, title, type, mediaId) {
    // TODO: Make it a transaction
    const user = await User.findById(userId).exec();
    const { watchList } = user;
    const itemAlreadyExists = watchList.find(item => item.mediaId === mediaId);

    if (itemAlreadyExists) {
      throw new APIError('The item already exists in your watchlist', 400);
    }

    user.watchList.push({ title, type, mediaId });
    await user.save();
    return user.watchList;
  }

  async removeFromWatchList(userId, mediaId) {
    const user = await User.findOneAndUpdate(
      { _id: userId }, 
      { $pull: { watchList: { mediaId } } },
      { new: true }
    ).exec();
    return user.watchList;
  }
}

module.exports = new UserService();
