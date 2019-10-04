import Axios from 'axios';

export async function downloadPic(dir: string, filename: string) {
  const url = `https://map.projectzomboid.com/maps/SurvivalL0/map_files/${dir}/${filename}`;
  console.log(`下载: ${url}`);
  const response = await Axios.get(url, { responseType: 'arraybuffer' });
  if (response && response.data) {
    return response.data;
  }
}

export async function downloadFile(dir: string, filename: string) {
  const url = `https://map.projectzomboid.com/maps/${dir}/${filename}`;
  console.log(`下载: ${url}`);
  const response = await Axios.get(url, { responseType: 'arraybuffer' });
  if (response && response.data) {
    return response.data;
  }
}
