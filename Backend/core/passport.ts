import { UserModel } from './../models/userModel';
import { UserService } from './../services/userService';
import  passport  from "passport";
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy(
UserService.login
  ));
export { passport }

// function(username, password, done) {
//     UserModel.findOne({ username: username }, function (err: any, user: any) {
//     if (err) { return done(err); }
//     if (!user) { return done(null, false); }
//     if (!user.verifyPassword(password)) { return done(null, false); }
//     return done(null, user);
//   });
// }