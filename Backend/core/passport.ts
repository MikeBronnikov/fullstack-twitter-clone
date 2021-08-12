import { UserModel } from './../models/userModel';
import { UserService } from './../services/userService';
import  passport  from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

 passport.use(new LocalStrategy(
  UserService.loginAsPassportVetify
    ))

  passport.use(new JwtStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
  },
    UserService.jwtVerify
    ));

  passport.serializeUser(function(id, done) {
    done(null, id);
  });
  
  passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err: any, user: any) {

      done(err, user);
    });
  });
export { passport }

// function(username, password, done) {
//     UserModel.findOne({ username: username }, function (err: any, user: any) {
//     if (err) { return done(err); }
//     if (!user) { return done(null, false); }
//     if (!user.verifyPassword(password)) { return done(null, false); }
//     return done(null, user);
//   });
// }