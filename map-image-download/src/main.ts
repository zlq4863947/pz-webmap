import { picDownload } from './pic-download';

async function bootstrap(): Promise<void> {
  const project = 'SurvivalL0';

  for (let i = 1; i < 20; i++) {
    picDownload(project, 19, i * 10, 1)
  }
}

bootstrap().catch((e) => {
  console.error('service on error: ', e.message);
  process.exit(1);
});
