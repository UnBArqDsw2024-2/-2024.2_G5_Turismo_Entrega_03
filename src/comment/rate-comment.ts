import { Comment } from './comment';

export class RateComment implements Comment {
  constructor(private text: string) {}

  getText() {
    return this.text;
  }

  getRole() {
    return 'Rate';
  }
}