export interface EventComponent {
    getDetails(): any;
    add(event: EventComponent): void;
    remove(event: EventComponent): void;
  }