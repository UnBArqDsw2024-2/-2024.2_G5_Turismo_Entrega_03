import { Factory } from './factory';
import { CreateCommentDto } from './dto/create-comment.dto';
import { RateComment } from './rate-comment';
import { Comment } from './comment';

export class RateCommentCreator extends Factory {
  public factoryMethod(createCommentDto: CreateCommentDto): Comment {
    return new RateComment(createCommentDto.text);
  }
}
