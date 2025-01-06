import { Test, TestingModule } from '@nestjs/testing';
import { ThemerService } from './themer.service';

describe('ThemerService', () => {
  let service: ThemerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemerService],
    }).compile();

    service = module.get<ThemerService>(ThemerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
