import { User } from './user';

export class HostUser implements User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  getRole() {
    return 'Host';
  }
}