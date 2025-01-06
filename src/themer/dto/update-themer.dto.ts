import { PartialType } from '@nestjs/mapped-types';
import { CreateThemerDto } from './create-themer.dto';

export class UpdateThemerDto extends PartialType(CreateThemerDto) {}
