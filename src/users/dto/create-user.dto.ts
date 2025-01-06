// import {
//   IsEmail,
//   IsOptional,
//   IsArray,
//   IsDate,
//   Length,
//   IsEnum,
// } from 'class-validator';

// export enum Gender {
//   Male = 'Male',
//   Female = 'Female',
// }

export class CreateUserDto {
  name: string;

  // @IsEmail()
  // email: string;

  // @Length(11, 11)
  // cpf: string;

  // @Length(6, 16)
  // password: string;

  // // @IsString()
  // // state: string;

  // @IsEnum(Gender)
  // gender: Gender;

  // phone: string;

  kind?: string;

  // @IsOptional()
  // @IsDate()
  // createdAt?: Date;

  // @IsOptional()
  // @IsArray()
  // permissions?: string[];
}
