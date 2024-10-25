import { Request, Response, NextFunction } from 'express';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import os from 'os';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { ConvertRequest } from '../interfaces/request';

export const validateMp4File = (
  req: ConvertRequest,
  res: Response,
  next: NextFunction
): void => {
  const mp4File = req.file;

  if (!mp4File) {
    res.status(400).json({ error: 'MP4 file is required' });
    return;
  }

  const videoPath = path.join(os.tmpdir(), `${uuidv4()}-input.mp4`);
  fs.writeFile(videoPath, mp4File.buffer, (error) => {
    if (error) {
      res.status(500).json({ error: 'Failed to write MP4 file' });
      return;
    }

    req.videoPath = videoPath;
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
      if (err) {
        res.status(500).json({ error: 'Failed to read MP4 metadata' });
        return;
      }

      const duration = metadata.format.duration;
      if (duration && duration > 10) {
        res
          .status(400)
          .json({ error: 'Video duration must be 10 seconds or less' });
        return;
      }

      const videoStream = metadata.streams.find(
        (stream) => stream.codec_type === 'video'
      );

      if (videoStream) {
        const { width, height } = videoStream;
        if (width && height && (width > 1024 || height > 768)) {
          res
            .status(400)
            .json({ error: 'Video resolution must be at most 1024x768' });
          return;
        }
      }

      next();
    });
  });
};
