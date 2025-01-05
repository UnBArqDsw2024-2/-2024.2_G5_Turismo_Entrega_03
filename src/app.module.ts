import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://eventour:eventourFCTE@eventour.mbmmn.mongodb.net/?retryWrites=true&w=majority&appName=EvenTour'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
