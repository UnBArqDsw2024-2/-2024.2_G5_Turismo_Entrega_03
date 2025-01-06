import { Factory } from './factory';
import { CreateUserDto } from './dto/create-user.dto';
import { CommonUser } from './common-user';
import { User } from './user';

export class CommonUserCreator extends Factory {
  public factoryMethod(createUserDto: CreateUserDto): User {
    return new CommonUser(createUserDto.name);
  }
}