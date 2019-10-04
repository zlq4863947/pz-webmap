import { join } from 'path';

export function getPicDirPath(project: string, dir: string) {
  return join(__dirname, '../../../../', `pz-map-${project}`, 'map_files', dir);
}

export function getDirPath(dir: string) {
  return join(__dirname, '../../../', `maps`, dir);
}
