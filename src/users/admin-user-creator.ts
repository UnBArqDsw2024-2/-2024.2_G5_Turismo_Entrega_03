import { Factory } from './factory';
import { CreateUserDto } from './dto/create-user.dto';
import { AdminUser } from './admin-user';
import { User } from './user';

export class AdminUserCreator extends Factory {
  public factoryMethod(createUserDto: CreateUserDto): User {
    return new AdminUser(createUserDto.name);
  }
}
