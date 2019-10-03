import { Global, Module } from '@nestjs/common';

import { PicConstroller } from './pic.constroller';
import { PicService } from './pic.service';

@Global()
@Module({
  controllers: [PicConstroller],
  providers: [PicService],
})
export class PicModule {}
