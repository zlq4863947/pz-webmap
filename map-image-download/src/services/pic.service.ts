import { join } from 'path';

import { Injectable } from '@nestjs/common';

import {checkFile, checkPic, downloadFile, downloadPic, savePic} from '../utils';
import {getDirPath, getPicDirPath} from '../utils/get-pic-dir-path';

@Injectable()
export class PicService {
  async save(project: string, dir: string, filename: string) {
    console.log(`调用存储服务, path:${project}/${dir}/${filename}`);
    // 检查不通过时，不进行处理
    if (!checkPic(project, dir, filename)) {
      return '已存在相应文件';
    }

    try {
      const data = await downloadPic(dir, filename);
      if (data) {
        const filepath = join(getPicDirPath(project, dir), filename);
        return await savePic(filepath, data);
      }
    } catch (e) {
      if (e && e.response && e.response.status !== 404) {
        console.log(e);
      } else {
        return `未查找到相应资源:${dir}/${filename}`;
      }
    }
  }

  async saveFile(path: string) {
    const [dir, filename] = path.split('/');
    console.log(`调用存储文件服务, path:${dir}/${filename}`);
    // 检查不通过时，不进行处理
    if (!checkFile(dir, filename)) {
      return '已存在相应文件';
    }

    try {
      const data = await downloadFile(dir, filename);
      if (data) {
        const filepath = join(getDirPath(dir), filename);
        return await savePic(filepath, data);
      }
    } catch (e) {
      if (e && e.response && e.response.status !== 404) {
        console.log(e);
      } else {
        return `未查找到相应资源:${dir}/${filename}`;
      }
    }
  }
}
