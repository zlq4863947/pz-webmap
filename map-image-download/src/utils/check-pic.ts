import { existsSync, mkdirSync, writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import { mapPicDirPath } from '../constants';

const writeFileAsync = promisify(writeFile);

/**
 * 检查路径是否存在
 *
 * @param dir 文件夹
 * @param filename 图片文件名
 */
export function checkPic(dir: string, filename: string) {
  const dirPath = join(mapPicDirPath, dir);
  if (!existsSync(dirPath)) {
    console.log(`创建图片文件夹: ${dirPath}`);
    mkdirSync(dirPath);
  }
  const fullpath = join(dirPath, filename);
  if (existsSync(fullpath)) {
    console.log(`已存在文件，路径: ${fullpath}`);
    return false;
  }

  return true;
}
