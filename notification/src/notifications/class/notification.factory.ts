import { INotification } from '../interface/notification.interface';
import { Inject, Injectable } from '@nestjs/common';
import { SMSNotification } from './sms.class';
import { EmailNotification } from './email.class';
import { PushNotification } from './push.class';

@Injectable()
export class NotificationFactory {
  constructor(
    @Inject(SMSNotification) private readonly sms: INotification,
    @Inject(EmailNotification) private readonly email: INotification,
    @Inject(PushNotification) private readonly push: INotification,
  ) {}

  createNotification(type: string): INotification {
    switch (type) {
      case 'sms':
        return this.sms;
      case 'email':
        return this.email;
      case 'push':
        return this.push;
      default:
        throw new Error('Invalid notification type');
    }
  }
}
