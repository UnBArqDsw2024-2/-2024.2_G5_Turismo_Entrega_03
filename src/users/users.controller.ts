import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Factory } from './factory';
import { HostUserCreator } from './host-user-creator';
import { AdminUserCreator } from './admin-user-creator';
import { CommonUserCreator } from './common-user-creator';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

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
    // return this.userService.create(CreateUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
