import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/user.schema';
import {UserAdapterMongo} from "../adapter/UserAdapterMongo";
import {CreateUserCommand} from "../command/user/CreateUserCommand";
import {AuthenticateUserCommand} from "../command/user/AuthenticateUserCommand";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserAdapterMongo,CreateUserCommand,AuthenticateUserCommand],
})
export class UserModule {}
