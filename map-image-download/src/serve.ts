import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { PicModule } from './services/pic.module';

const port = 3200;

async function serve(): Promise<void> {
  const app = await NestFactory.create(PicModule);
  Logger.log(`start service, port: ${port}`, 'bootstrap');
  await app.listen(port);
}

serve().catch((e) => {
  console.error('service on error: ', e.message);
  process.exit(1);
});
