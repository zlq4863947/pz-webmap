import { checkPic, downloadPic, savePic } from './utils';

export async function picDownload() {
  for (let i = 10; i < 100; i++) {
    try {
      for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
          const dir = `${i}`;
          const filename = `${j}_${k}.jpg`;
          // 检查不通过时，跳出循环
          if (!checkPic(dir, filename)) {
            continue;
          }
          const data = await downloadPic(dir, filename);
          if (data) {
            savePic(dir, filename, data);
          }
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
