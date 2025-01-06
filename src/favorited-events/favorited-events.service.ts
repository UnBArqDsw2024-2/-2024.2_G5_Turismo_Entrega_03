import { Injectable } from '@nestjs/common';
import { CreateFavoritedEventDto } from './dto/create-favorited-event.dto';
import { UpdateFavoritedEventDto } from './dto/update-favorited-event.dto';

@Injectable()
export class FavoritedEventsService {
  create(createFavoritedEventDto: CreateFavoritedEventDto) {
    return 'This action adds a new favoritedEvent';
  }

  findAll() {
    return `This action returns all favoritedEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoritedEvent`;
  }

  update(id: number, updateFavoritedEventDto: UpdateFavoritedEventDto) {
    return `This action updates a #${id} favoritedEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritedEvent`;
  }
}
