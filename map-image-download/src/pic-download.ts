import { existsSync, mkdirSync, writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import Axios from 'axios';

const writeFileAsync = promisify(writeFile);

export class PicDownload {
  async download() {
    const url = 'https://map.projectzomboid.com/maps/SurvivalL0/map_files/';
    for (let i = 0; i < 22; i++) {
      try {
        for (let j = 0; j < 100; j++) {
          for (let k = 0; k < 100; k++) {
            const dir = `${i}`;
            const filename = `${j}_${k}.jpg`;
            const imageDirPath = join(__dirname, '../images');
            if (!existsSync(imageDirPath)) {
              console.log(`创建图片文件夹: ${imageDirPath}`);
              mkdirSync(imageDirPath);
            }
            const dirPath = join(imageDirPath, dir);
            const fullpath = join(dirPath, filename);
            if (existsSync(fullpath)) {
              console.log(`已存在文件，跳出循环，路径: ${fullpath}`);
              continue;
            }
            const reqUrl = `${url}${dir}/${filename}`;
            console.log(`下载: ${reqUrl}`);
            const response = await Axios.get(reqUrl, { responseType: 'arraybuffer' });
            if (response && response.data) {
              if (!existsSync(dirPath)) {
                console.log(`创建路径: ${dirPath}`);
                mkdirSync(dirPath);
              }
              console.log(`保存文件: ${fullpath}`);
              writeFileAsync(fullpath, Buffer.from(response.data), 'binary');
            }
          }
        }
      } catch (e) {
        if (e && e.response && e.response.status !== 404) {
          console.log(e);
        } else {
          console.log('不符合条件，跳出循环');
          continue;
        }
      }
    }
  }
}
