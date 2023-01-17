import { Injectable } from '@nestjs/common';
import { NotificationModel } from './notifications.model';
import { users, User } from '../users';
import { NotificationFactory } from './class/notification.factory';
import * as fs from 'fs';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationFactory: NotificationFactory) {}

  sendSms(notification: NotificationModel) {
    const sms = this.notificationFactory.createNotification('sms');
    return sms.saveNotification(notification);
  }

  sendEmail(notification: NotificationModel) {
    const email = this.notificationFactory.createNotification('email');
    return email.saveNotification(notification);
  }

  sendPush(notification: NotificationModel) {
    const push = this.notificationFactory.createNotification('push');
    return push.saveNotification(notification);
  }

  sendNotification(notification: NotificationModel) {
    users.forEach((user: User) => {
      if (user.categories.includes(notification.category)) {
        user.channels.forEach((channel) => {
          notification.user = user.name;
          const dateNow = new Date();
          notification.date = dateNow.toUTCString();
          switch (channel) {
            case 'sms':
              this.sendSms(notification);
              break;
            case 'email':
              this.sendEmail(notification);
              break;
            case 'push':
              this.sendPush(notification);
              break;
            default:
              throw new Error('Invalid notification type');
          }
        });
      }
    });
  }

  getNotifications() {
    const filePath = 'notifications.txt';
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const notifications = data.split('\n');
      return { notifications };
    } catch (error) {
      throw new Error(error);
    }
  }
}
