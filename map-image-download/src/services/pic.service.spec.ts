import { PicService } from './pic.service';

describe('PicService', () => {
  let picService: PicService;

  beforeAll(() => {
    picService = new PicService();
  });

  it('save pic', async () => {
    await picService.save('2', '0_0.jpg');
  });
});
