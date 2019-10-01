import { PicDownload } from './pic-download';

async function bootstrap(): Promise<void> {
  const picDownload = new PicDownload();
  await picDownload.download();
}

bootstrap().catch((e) => {
  console.error('service on error: ', e.message);
  process.exit(1);
});
