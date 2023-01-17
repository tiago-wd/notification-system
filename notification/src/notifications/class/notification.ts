import * as fs from 'fs';
import { INotification } from '../interface/notification.interface';
import { NotificationModel } from '../notifications.model';

export class Notification implements INotification {
  notificationType: string;

  saveNotification(notification: NotificationModel): void {
    const message = `${notification.date} - ${notification.category} - ${this.notificationType} - ${notification.message} - ${notification.user}`;
    const filePath = 'notifications.txt';
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
    }

    fs.appendFile(filePath, message + '\n', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}
