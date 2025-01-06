import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Factory } from './factory';
import { HostUserCreator } from './host-user-creator';
import { AdminUserCreator } from './admin-user-creator';
import { CommonUserCreator } from './common-user-creator';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    let creator: Factory;

    switch (createUserDto.kind) {
      case 'host':
        creator = new HostUserCreator();
        break;
      case 'admin':
        creator = new AdminUserCreator();
        break;
      default:
        creator = new CommonUserCreator();
    }

    return creator.someOperation(createUserDto);
  }
}
