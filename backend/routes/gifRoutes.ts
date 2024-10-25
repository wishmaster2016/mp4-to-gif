import { Router } from 'express';
import { convertToGif } from '../controllers/gifController';

const router = Router();
router.post('/', convertToGif);

export default router;
