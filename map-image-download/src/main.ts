import { picDownload } from './pic-download';

async function bootstrap(): Promise<void> {
  await picDownload();
}

bootstrap().catch((e) => {
  console.error('service on error: ', e.message);
  process.exit(1);
});
