import { User } from './user';

export class AdminUser implements User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  getRole() {
    return 'Admin';
  }
}