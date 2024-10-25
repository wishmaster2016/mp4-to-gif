import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import os from 'os';

export const convert = (videoPath: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const tempPath = path.join(os.tmpdir(), `${Date.now()}-output.gif`); 

    ffmpeg(videoPath)
      .outputOptions([
        '-vf',
        'scale=-1:400',
        '-r',
        '5',
        '-t',
        '10',
      ])
      .toFormat('gif')
      .save(tempPath)
      .on('end', () => {
        const gif = fs.readFileSync(tempPath);
        fs.unlinkSync(tempPath);
        fs.unlinkSync(videoPath);
        resolve(gif);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};
