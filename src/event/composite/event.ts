import { EventComponent } from './event-component.interface';

export class Event implements EventComponent {
  constructor(
    private id: number,
    private name: string,
    private themeId: string,
    private userId: string,
    private location: string,
    private startDate: Date,
    private endDate: Date,
  ) {}

  getDetails(): any {
    return {
      id: this.id,
      name: this.name,
      themeId: this.themeId,
      userId: this.userId,
      location: this.location,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }

  add(event: EventComponent): void {
    throw new Error("Não é possível adicionar sub-eventos a um evento individual.");
  }

  remove(event: EventComponent): void {
    throw new Error("Não é possível remover sub-eventos de um evento individual.");
  }
}
