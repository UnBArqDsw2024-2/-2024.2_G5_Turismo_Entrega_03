import { Test, TestingModule } from '@nestjs/testing';
import { ThemerController } from './themer.controller';
import { ThemerService } from './themer.service';

describe('ThemerController', () => {
  let controller: ThemerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemerController],
      providers: [ThemerService],
    }).compile();

    controller = module.get<ThemerController>(ThemerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
