const Notification = require('../models/notification.model');
const User = require('../models/user.model');


class NotificationService {
  getEventText(eventName, meta) {
    const subject = meta.senderName;
    const types = {
      userFollow: `${subject} has started following you`,
      postComment: `${subject} has commented on your post`
    };
    return types[eventName];
  }

  /*
    Event names:
    - userFollow
    - postComment
  */
  async create(eventName, eventData) {
    const textContent = this.getEventText(eventName, eventData);
    const notification = new Notification({
      sender: eventData.senderId,
      receiver: eventData.receiverId,
      eventName,
      textContent,
      post: eventData.post
    });
    await notification.save();
    return notification;
  }

  async getUserNotifications(guid) {
    const user = await User.findOne({ guid }).exec();
    const notifications = await Notification.find({ receiver: user._id })
      .populate('sender', 'guid email name')
      .populate('post', 'author')
      .select({ receiver: 0 })
      .sort({ createdAt: -1 }).lean().exec();
    this._cleanupNotifications(user._id);
    return notifications;
  }

  async markAsRead(guid) {
    const user = await User.findOne({ guid }).exec();
    await Notification.updateMany({
      isRead: false,
      receiver: user._id
    }, {
      isRead: true
    }).exec();
  }

  async _cleanupNotifications(userId) {
    // Deletes notification older than one day
    let oneDayOlder = Date.now() - (86400 * 1000);
    oneDayOlder = new Date(oneDayOlder);

    await Notification.deleteMany({ 
      createdAt: { $lte: oneDayOlder },
      receiver: userId,
      isRead: true
    }).exec();
  }
}

module.exports = new NotificationService();
