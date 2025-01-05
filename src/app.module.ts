import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://eventour:eventourFCTE@eventour.mbmmn.mongodb.net/?retryWrites=true&w=majority&appName=EvenTour'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
