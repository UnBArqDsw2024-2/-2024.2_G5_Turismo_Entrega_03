import { EventComponent } from './event-component.interface';

export class EventGroup implements EventComponent {
  private events: EventComponent[] = [];

  add(event: EventComponent): void {
    this.events.push(event);
  }

  remove(event: EventComponent): void {
    this.events = this.events.filter(e => e !== event);
  }

  getDetails(): any {
    return this.events.map(event => event.getDetails());
  }
}
