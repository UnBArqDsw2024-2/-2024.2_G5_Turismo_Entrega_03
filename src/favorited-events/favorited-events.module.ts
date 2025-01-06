import { Module } from '@nestjs/common';
import { FavoritedEventsService } from './favorited-events.service';
import { FavoritedEventsController } from './favorited-events.controller';

@Module({
  controllers: [FavoritedEventsController],
  providers: [FavoritedEventsService],
})
export class FavoritedEventsModule {}
