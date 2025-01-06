import { Injectable } from '@nestjs/common';
import { Event } from './composite/event';
import { EventGroup } from './composite/event-group';

@Injectable()
export class EventService {
  private events: { [id: number]: Event | EventGroup } = {};
  private currentId = 1;

  createEvent(name: string, themeId: string, userId: string, location: string, startDate: Date, endDate: Date, parentId?: number) {
    const newEvent = new Event(this.currentId, name, themeId, userId, location, startDate, endDate);

    if (parentId && this.events[parentId] instanceof EventGroup) {
      (this.events[parentId] as EventGroup).add(newEvent);
    } else {
      this.events[this.currentId] = newEvent;
    }

    this.currentId++;
    return newEvent.getDetails();
  }

  createEventGroup() {
    const group = new EventGroup();
    this.events[this.currentId] = group;
    this.currentId++;
    return { id: this.currentId - 1, message: "Grupo de eventos criado com sucesso" };
  }

  getEvents() {
    return Object.values(this.events).map(event => event.getDetails());
  }
}
