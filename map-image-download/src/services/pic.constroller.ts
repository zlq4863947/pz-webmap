import { Controller, Get, Query } from '@nestjs/common';

import { PicService } from './pic.service';

@Controller('pic')
export class PicConstroller {
  constructor(private readonly picService: PicService) {}

  @Get()
  savePic(@Query('project') project: string, @Query('dir') dir: string, @Query('filename') filename: string) {
    return this.picService.save(project, dir, filename);
  }
}
