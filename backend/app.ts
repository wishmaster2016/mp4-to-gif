import express from 'express';
import multer from 'multer';
import gifRoutes from './routes/gifRoutes';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { validateMp4File } from './middlewares/validateMp4File';

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1 * 1024 * 1024 * 1024 }
});

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1000,
});

app.use(cors());
app.use('/convert', apiLimiter, upload.single('video'), validateMp4File, gifRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
