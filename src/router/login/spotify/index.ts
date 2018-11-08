import { Router } from 'express';
import passport from '../../../passport';
import { spotify_scope } from '../../../passport/strategy/spotify';

const router = Router();

router.get(
  '/',
  passport.authenticate('spotify', { scope: spotify_scope, session: false }),
);

router.get(
  '/callback',
  passport.authenticate('spotify', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    console.log({ user: req.user });
    res.cookie('accessToken', req.user.accessToken);
    return res.redirect('/');
  },
);

export default router;
