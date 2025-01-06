import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemerService } from './themer.service';
import { CreateThemerDto } from './dto/create-themer.dto';
import { UpdateThemerDto } from './dto/update-themer.dto';

@Controller('themer')
export class ThemerController {
  constructor(private readonly themerService: ThemerService) {}

  @Post()
  create(@Body() createThemerDto: CreateThemerDto) {
    return this.themerService.create(createThemerDto);
  }

  @Get()
  findAll() {
    return this.themerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThemerDto: UpdateThemerDto) {
    return this.themerService.update(+id, updateThemerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themerService.remove(+id);
  }
}
