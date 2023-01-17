import { NotificationModel } from '../notifications.model';

export interface INotification {
  notificationType: string;
  saveNotification(notification: NotificationModel): void;
}
