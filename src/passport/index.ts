import passport from 'passport';
import spotify from './strategy/spotify';

export enum AuthenticationType {
  spotify,
}

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(spotify);

export default passport;
