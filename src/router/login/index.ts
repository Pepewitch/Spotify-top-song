import { Router } from 'express';
import passport from '../../passport';
import spotify_router from './spotify';

const router = Router();

router.use('/spotify', spotify_router);

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logOut();
  }
  return res.sendStatus(200);
});

export default router;
