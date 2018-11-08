import passport from 'passport';
import spotify from './strategy/spotify';

export enum AuthenticationType {
  spotify,
}
passport.use(spotify);

export default passport;
