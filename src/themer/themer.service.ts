import { Injectable } from '@nestjs/common';
import { CreateThemerDto } from './dto/create-themer.dto';
import { UpdateThemerDto } from './dto/update-themer.dto';

@Injectable()
export class ThemerService {
  create(createThemerDto: CreateThemerDto) {
    return 'This action adds a new themer';
  }

  findAll() {
    return `This action returns all themer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} themer`;
  }

  update(id: number, updateThemerDto: UpdateThemerDto) {
    return `This action updates a #${id} themer`;
  }

  remove(id: number) {
    return `This action removes a #${id} themer`;
  }
}
