import { User } from './user';
import { CreateUserDto } from './dto/create-user.dto';

export abstract class Factory {
  public abstract factoryMethod(createUserDto: CreateUserDto): User;

  public someOperation(createUserDto: CreateUserDto): string {
    const user = this.factoryMethod(createUserDto);
    return `Creator: User type: ${user.getRole()}. Name: ${user.getName()}`;
  }
}
