import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Jo tum mere ho by Anuv');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'find on the based on Id';
  }

  @Put(':id')
  update() {
    return 'update on the based on Id';
  }

  @Delete(':id')
  delete() {
    return 'delete on the based on Id';
  }
}
