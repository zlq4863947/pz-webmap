import { Controller, Get, Query } from '@nestjs/common';

import { PicService } from './pic.service';

@Controller()
export class PicConstroller {
  constructor(private readonly picService: PicService) {}

  @Get('pic')
  savePic(@Query('project') project: string, @Query('dir') dir: string, @Query('filename') filename: string) {
    return this.picService.save(project, dir, filename);
  }

  @Get('file')
  saveFile(@Query('path') path: string) {
    return this.picService.saveFile(path);
  }
}
