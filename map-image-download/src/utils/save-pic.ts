import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import { mapPicDirPath } from '../constants';

const writeFileAsync = promisify(writeFile);

/**
 * 保存图片到本地
 * @param filepath
 * @param data
 */
export async function savePic(filepath: string, data: any) {
  console.log(`保存文件: ${filepath}`);
  await writeFileAsync(filepath, Buffer.from(data), 'binary');

  return `已保存文件为: ${filepath}`;
}
