import { User } from './user';

export class CommonUser implements User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  getRole() {
    return 'Usuário Comum';
  }
}