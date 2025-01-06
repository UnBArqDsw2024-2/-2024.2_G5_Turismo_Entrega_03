import { Comment } from './comment';

export class CommonComment implements Comment {
  constructor(private text: string) {}

  getText() {
    return this.text;
  }

  getRole() {
    return 'Common comment';
  }
}