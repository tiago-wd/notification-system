import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationModel } from './notifications.model';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Post()
  sendNotification(@Body() notification: NotificationModel) {
    this.notificationsService.sendNotification(notification);
  }

  @Get()
  getNotifications() {
    return this.notificationsService.getNotifications();
  }

  @Get('categories')
  getCategories() {
    return {
      categories: ['sports', 'finance', 'movies'],
    };
  }
}
