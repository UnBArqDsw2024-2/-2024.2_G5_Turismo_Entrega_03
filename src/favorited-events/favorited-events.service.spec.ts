import { Test, TestingModule } from '@nestjs/testing';
import { FavoritedEventsService } from './favorited-events.service';

describe('FavoritedEventsService', () => {
  let service: FavoritedEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritedEventsService],
    }).compile();

    service = module.get<FavoritedEventsService>(FavoritedEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
