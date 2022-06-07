import fs from 'fs-extra';
import path from 'path';

export function writeLog(data: any, p: string) {
  const logsDir = path.resolve(__dirname, '../.logs/');
  if (!fs.pathExistsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  const logData = `export default ${JSON.stringify(data, null, 2)}`;
  fs.writeFileSync(path.resolve(logsDir, p), logData);
}
