import { Module } from '@nestjs/common';
import { ThemerService } from './themer.service';
import { ThemerController } from './themer.controller';

@Module({
  controllers: [ThemerController],
  providers: [ThemerService],
})
export class ThemerModule {}
