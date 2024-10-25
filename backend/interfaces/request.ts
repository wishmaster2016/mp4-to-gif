import { Request } from 'express';

export interface ConvertRequest extends Request {
  file?: Express.Multer.File;
  videoPath?: string;
}
