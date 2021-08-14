const notificationService = require('../services/notification.service');

class NotificationController {
  async getUserNotifications(req, res) {
    const { sub } = req.user;
    const notifications = await notificationService.getUserNotifications(sub);
    res.json({
      total: notifications.length,
      notifications
    });
  }

  async markAsRead(req, res) {
    const { sub } = req.user;
    await notificationService.markAsRead(sub);
    res.json();
  }
}

module.exports = new NotificationController();
