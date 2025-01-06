import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';

export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }
}