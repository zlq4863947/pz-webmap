import { Injectable } from '@nestjs/common';

import { checkPic, downloadPic, savePic } from '../utils';

@Injectable()
export class PicService {
  async save(dir: string, filename: string) {
    console.log(`调用存储服务, path:${dir}/${filename}`);
    // 检查不通过时，不进行处理
    if (!checkPic(dir, filename)) {
      return '已存在相应文件';
    }

    try {
      const data = await downloadPic(dir, filename);
      if (data) {
        return await savePic(dir, filename, data);
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
