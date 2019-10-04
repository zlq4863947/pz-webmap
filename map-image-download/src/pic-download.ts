import { checkPic, downloadPic, savePic } from './utils';
import {join} from "path";
import {getPicDirPath} from "./utils/get-pic-dir-path";

export async function picDownload(project: string, dirNum: number, x: number, y: number) {
  for (let i = dirNum; i < 100; i++) {
    for (let j = x; j < 1000; j++) {
      try {
        for (let k = y; k < 1000; k++) {
          const dir = `${i}`;
          const filename = `${j}_${k}.jpg`;
          // 检查不通过时，跳出循环
          if (!checkPic(project, dir, filename)) {
            continue;
          }
          const data = await downloadPic(dir, filename);
          if (data) {
            const filepath = join(getPicDirPath(project, dir), filename);
            savePic(filepath, data);
          }
        }
      } catch (e) {
        if (e && e.response && e.response.status !== 404) {
          console.log(e);
        } else {
          console.log('不符合条件，跳出循环');
        }
      }
    }
  }
}
