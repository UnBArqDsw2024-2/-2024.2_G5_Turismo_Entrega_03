import { Factory } from './factory';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommonComment } from './common-comment';
import { Comment } from './comment';

export class CommonCommentCreator extends Factory {
  public factoryMethod(createCommentDto: CreateCommentDto): Comment {
    return new CommonComment(createCommentDto.text);
  }
}
