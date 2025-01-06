import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritedEventsService } from './favorited-events.service';
import { CreateFavoritedEventDto } from './dto/create-favorited-event.dto';
import { UpdateFavoritedEventDto } from './dto/update-favorited-event.dto';

@Controller('favorited-events')
export class FavoritedEventsController {
  constructor(private readonly favoritedEventsService: FavoritedEventsService) {}

  @Post()
  create(@Body() createFavoritedEventDto: CreateFavoritedEventDto) {
    return this.favoritedEventsService.create(createFavoritedEventDto);
  }

  @Get()
  findAll() {
    return this.favoritedEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritedEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoritedEventDto: UpdateFavoritedEventDto) {
    return this.favoritedEventsService.update(+id, updateFavoritedEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritedEventsService.remove(+id);
  }
}
