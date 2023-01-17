import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationFactory } from './class/notification.factory';
import { SMSNotification } from './class/sms.class';
import { EmailNotification } from './class/email.class';
import { PushNotification } from './class/push.class';

@Module({
  providers: [
    NotificationsService,
    NotificationFactory,
    SMSNotification,
    EmailNotification,
    PushNotification,
  ],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
