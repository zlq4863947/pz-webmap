import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import { mapPicDirPath } from '../constants';

const writeFileAsync = promisify(writeFile);

/**
 * 保存图片到本地
 * @param dir
 * @param filename
 * @param data
 */
export async function savePic(dir: string, filename: string, data: any) {
  const fullpath = join(mapPicDirPath, dir, filename);
  console.log(`保存文件: ${fullpath}`);
  await writeFileAsync(fullpath, Buffer.from(data), 'binary');

  return `已保存文件为: ${fullpath}`;
}
