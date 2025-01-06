import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritedEventDto } from './create-favorited-event.dto';

export class UpdateFavoritedEventDto extends PartialType(CreateFavoritedEventDto) {}
