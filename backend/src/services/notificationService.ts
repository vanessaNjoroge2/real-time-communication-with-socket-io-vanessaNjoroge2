import { Server } from 'socket.io';

const notifications: { [key: string]: string[] } = {};

export class NotificationService {
  static addNotification(userId: string, message: string) {
    if (!notifications[userId]) {
      notifications[userId] = [];
    }
    notifications[userId].push(message);
  }

  static getNotifications(userId: string) {
    return notifications[userId] || [];
  }

  static clearNotifications(userId: string) {
    notifications[userId] = [];
  }

  static notifyUser(io: Server, userId: string, message: string) {
    io.to(userId).emit('notification', message);
  }
}
