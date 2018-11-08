import { Router } from 'express';
import passport from '../../../passport';
import { spotify_scope } from '../../../passport/strategy/spotify';

const router = Router();

router.get(
  '/',
  passport.authenticate('spotify', { scope: spotify_scope }),
);

router.get(
  '/callback',
  passport.authenticate('spotify', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    console.log({ user: req.user });
    res.cookie('accessToken', req.user.accessToken);
    return res.redirect('/summary');
  },
);

export default router;
