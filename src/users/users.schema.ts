import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ discriminatorKey: 'kind' })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true, enum: ['Male', 'Female'] })
  gender: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: 'user' })
  kind: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ type: [String], default: [] })
  permissions: string[];
}
export const UserSchema = SchemaFactory.createForClass(User);

@Schema()
export class UserHost extends User {
  @Prop({ default: ['CREATE_EVENT', 'UPDATE_EVENT'] })
  permissions: string[];
}
export const UserHostSchema = SchemaFactory.createForClass(UserHost);

@Schema()
export class UserAdmin extends User {
  @Prop({ default: ['CREATE_THEME', 'UPDATE_THEME', 'WRITE_MAIN_PAGE'] })
  permissions: string[];
}
export const UserAdminSchema = SchemaFactory.createForClass(UserAdmin);
