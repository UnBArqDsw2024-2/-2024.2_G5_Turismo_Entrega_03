import { Test, TestingModule } from '@nestjs/testing';
import { FavoritedEventsController } from './favorited-events.controller';
import { FavoritedEventsService } from './favorited-events.service';

describe('FavoritedEventsController', () => {
  let controller: FavoritedEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritedEventsController],
      providers: [FavoritedEventsService],
    }).compile();

    controller = module.get<FavoritedEventsController>(FavoritedEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
