import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { EventModule } from './event/event.module';
import { ThemerModule } from './themer/themer.module';
import { CommentModule } from './comment/comment.module';
import { FavoritedEventsModule } from './favorited-events/favorited-events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://eventour:eventourFCTE@eventour.mbmmn.mongodb.net/?retryWrites=true&w=majority&appName=EvenTour',
    ),
    UsersModule,
    EventModule,
    ThemerModule,
    CommentModule,
    FavoritedEventsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
