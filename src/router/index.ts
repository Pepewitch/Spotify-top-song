import { Router } from 'express';
import login from './login';
import { join } from 'path';

const router = Router();

router.use('/login', login);

router.get('/ping', (req, res) => {
  return res.status(200).send({ message: 'pong' });
});

router.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(join(__dirname, '..', '..', 'view', 'index.html'));
});

export default router;
