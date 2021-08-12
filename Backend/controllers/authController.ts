import { ResponseInterface, ResultCodeEnum } from "./../globalTypes";
import express from "express";
import { passport } from "../core/passport";
import { UserModel } from "../models/userModel";
import jwt from 'jsonwebtoken'
import ApiError from "../error/ApiError";

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
                throw ApiError.badRequest('incorre suka', 'jwt', 'query', 's', 422)
              }
              let userInfo = user.toJSON()
              let token ='JWT ' + jwt.sign({ userID: userInfo._id }, process.env.SECRET_KEY || 'qwerty123', {expiresIn: '30 days'})
              return res.json({ ResultCode: ResultCodeEnum.succsess, data: {...userInfo, token}});
            });
          })(req, res, next);
        }       
       
   
  catch (error) {
    console.log(error)
    res.status(401).json({
      ResultCode: ResultCodeEnum.error
    })
}
}
}
export const AuthController = new _AuthController();

//req: express.Request, res: express.Response<ResponseInterface>, user: any
