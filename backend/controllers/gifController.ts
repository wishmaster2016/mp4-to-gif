import { Response } from 'express';
import { convert } from '../services/conversionService';
import { ConvertRequest } from '../interfaces/request';

export const convertToGif = async (
  req: ConvertRequest,
  res: Response
): Promise<void> => {
  const mp4File = req.file;
  console.log('NEW Request ----------------------------------------!');

  if (!mp4File) {
    res.status(400).json({ error: 'MP4 file is required' });
    return;
  }

  try {
    const gifFile = await convert(req.videoPath!);
    res.setHeader('Content-Disposition', 'attachment; filename=output.gif');
    res.send(gifFile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to convert MP4 to GIF' });
  }
};
