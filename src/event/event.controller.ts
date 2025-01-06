import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  createEvent(
    @Body('name') name: string,
    @Body('themeId') themeId: string,
    @Body('userId') userId: string,
    @Body('location') location: string,
    @Body('startDate') startDate: Date,
    @Body('endDate') endDate: Date,
    @Body('parentId') parentId?: number,
  ) {
    return this.eventService.createEvent(name, themeId, userId, location, startDate, endDate, parentId);
  }

  @Post('group')
  createEventGroup() {
    return this.eventService.createEventGroup();
  }

  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }
}

// teste