const User = require('../models/user.model');
const Post = require('../models/post.model');
const Follower = require('../models/follower.model');
const postService = require('./post.service');
const notificationService = require('./notification.service');
const { APIError } = require('../utils/errors')

class UserService {
  async create(guid, email) {
    const user = new User({ guid, email });
    await user.save();
    return user;
  }

  async getByGuid(guid) {
    const user = await User.findOne({ guid }).lean().exec();
    return user;
  }
  
  async updateByGuid(guid, fields) {
    let updates = {
      email: fields.email ?? null,
      name: fields.name ?? null,
      avatarUrl: fields.avatar_url ?? null
    }
    const user = await User.findOneAndUpdate({ guid }, updates, { new: true });
    return user;
  }

  async getUserPosts(guid) {
    const user = await User.findOne({ guid }).lean().exec();
    const posts = await Post.find({ author: user._id }).lean().exec();
    return posts;
  }

  async getFollowSuggestions(myId) {
    const users = await User.find({ guid: {
      $ne: myId
    } }).sort({ createdAt: -1 }).limit(10).lean().exec();
    return users;
  }

  async searchUserByName(query) {
    const users = await User.find({
      name: {
        $regex: new RegExp(`^${query}`),
        $options: 'i'
      }
    }).limit(10).lean().exec();
    return users;
  }

  async followUser(guid, toUserId) {
    // fromUserId -> The user (follower)
    // toUserId -> The person the user wants to follow (followee)
    const user = await User.findOne({ guid }).lean().exec();
    const isFollowing = await Follower.findOne({ from: user._id, to: toUserId}).lean().exec();

    if (isFollowing) {
      throw new APIError('You are already following the user', 400);
    }

    const follower = new Follower({ from: user._id, to: toUserId });
    await follower.save();

    notificationService.create('userFollow', {
      senderId: user._id,
      senderName: user.name,
      receiverId: toUserId,
      eventName: 'userFollow',
    });
    return follower;
  }

  async getFollowees(guid) {
    const user = await User.findOne({ guid }).lean().exec();
    const followees = await Follower.find({ from: user._id }, 'to').populate('to').exec();
    return followees;
  }

  async getUserFeed(guid) {
    const user = await User.findOne({ guid }).lean().exec();
    const posts = await postService.getPostsByFollowee(user._id);
    return posts;
  }

  async addToWatchList(guid, title, type, mediaId) {
    // TODO: Make it a transaction
    const user = await User.findOne({ guid }).exec();
    const { watchList } = user;
    const itemAlreadyExists = watchList.find(item => item.mediaId === mediaId);

    if (itemAlreadyExists) {
      throw new APIError('The item already exists in your watchlist', 400);
    }

    user.watchList.push({ title, type, mediaId });
    await user.save();
    return user.watchList;
  }

  async removeFromWatchList(guid, mediaId) {
    const user = await User.findOneAndUpdate(
      { guid }, 
      { $pull: { watchList: { mediaId } } },
      { new: true }
    ).exec();
    return user.watchList;
  }
}

module.exports = new UserService();
