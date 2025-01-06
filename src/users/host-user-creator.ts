import { Factory } from './factory';
import { HostUser } from './host-user';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user';

export class HostUserCreator extends Factory {
  public factoryMethod(createUserDto: CreateUserDto): User {
    return new HostUser(createUserDto.name);
  }
}