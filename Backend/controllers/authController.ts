import { ResponseInterface, ResultCodeEnum } from "./../globalTypes";
import express from "express";
import { passport } from "../core/passport";
import { UserModel } from "../models/userModel";
import jwt from 'jsonwebtoken'

interface Iargs {
  req: any;
  res: any;
  user: any;
}
class _AuthController {
  async login(
    req: express.Request,
    res: express.Response<ResponseInterface>,
    next: any
  ) {
      try {
        passport.authenticate("local", function  (err: any, user: any, info: any) {
            if (err) {
              return next(err); // will generate a 500 error
            }
            if (!user) {
              return res
                .status(422)
                .json({
                  ResultCode: ResultCodeEnum.error,
                  errors: [{ 
                      msg: "incorrect username or password",
                      location: 'body',
                      param: 'usermame, password',
                      value: req.body?.username + ':' + req.body?.password
                  }],
                });
            }
      
            req.login(user, async (loginErr) => {
              if (loginErr) {
                return next(loginErr);
              }
              let userInfo = user.toJSON()
              let token = jwt.sign({ userID: userInfo._id }, process.env.SECRET_KEY || 'qwerty123', {expiresIn: '30d'})
              return res.json({ ResultCode: ResultCodeEnum.succsess, data: {...userInfo, token}});
            });
          })(req, res, next);
        }       
       
   
  catch (error) {
          
}
}
}
export const AuthController = new _AuthController();

//req: express.Request, res: express.Response<ResponseInterface>, user: any
