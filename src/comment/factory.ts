import { Comment } from './comment';
import { CreateCommentDto } from './dto/create-comment.dto';

export abstract class Factory {
  public abstract factoryMethod(createCommentDto: CreateCommentDto): Comment;

  public someOperation(createCommentDto: CreateCommentDto): string {
    const comment = this.factoryMethod(createCommentDto);
    return `Creator: Comment type: ${comment.getRole()}. Content "${comment.getText()}"`;
  }
}
