import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';

export abstract class Factory {
  public abstract factoryMethod(createUserDto: CreateUserDto): User;

  public someOperation(createUserDto: CreateUserDto): string {
    const user = this.factoryMethod(createUserDto);
    return `Creator: The same creator's code has just worked with ${user.getRole()} ${user.getName()}`;
  }
}
