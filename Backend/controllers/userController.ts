import { errorResponseHandler } from './../error/errorResponseHandler';
import { UserService } from './../services/userService';
import { sendEmail } from './../utils/sendEmail';
import { generateHash } from "./../utils/generateHash";
import { ResultCodeEnum, ResponseInterface } from "./../globalTypes";
import { UserModel } from "./../models/userModel";
import { ValidationError, validationResult } from "express-validator";
import express from "express";
import path from 'path';

class _UserController {
  async index(
    req: express.Request,
    res: express.Response<ResponseInterface>
  ): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();
      res.status(200).send({
        data: users,
        count: users.length,
        ResultCode: ResultCodeEnum.succsess,
      });
    } catch (error) {
      res.json({
        errors: error,
        ResultCode: ResultCodeEnum.error,
      });
    }
  }



  async findUser(
    req: express.Request,
    res: express.Response<ResponseInterface>
  ){ 
    try {
    const foundUser = await UserService.findUser(req.params.id)

    res.status(400).json({
      ResultCode: ResultCodeEnum.succsess,
      data: foundUser 
    })
  } catch (error) {
    if (error.name ==='MongoError' && error.code === 11000){
      res.status(422).json({
      ResultCode: ResultCodeEnum.error,
       errors: [
         errorResponseHandler(`mongoerror with ${Object.keys(error.keyValue)}`, Object.keys(error.keyValue)[0], 
         'query', error.keyValue[Object.keys(error.keyValue)[0]])
   ]
  })
}
    res.status(error.status || 500).json({
      ResultCode: ResultCodeEnum.error,
      errors: [error]
    })
  }
  }


  async create(
    req: express.Request,
    res: express.Response<ResponseInterface>
  ): Promise<void> {
    
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array({ onlyFirstError: true }),
          ResultCode: ResultCodeEnum.error,
        });
        return;
      }
      const createdUser = await UserService.create(req.body)
      res.status(201).json({
        data: createdUser,
        ResultCode: ResultCodeEnum.succsess,
      });
    } catch (error) {
      console.log(JSON.stringify(error))
      if (error.name ==='MongoError' && error.code === 11000){
         res.status(422).json({
          errors: [
            errorResponseHandler(`duplicated ${Object.keys(error.keyValue)}`, Object.keys(error.keyValue)[0], 
            'body', error.keyValue[Object.keys(error.keyValue)[0]])
      ] ,
          ResultCode: ResultCodeEnum.error,
        });
        return
      }
      res.status(500).json({
        errors: [
          error
    ],
        ResultCode: ResultCodeEnum.error,
      });
    }
  }


  async verify(req: express.Request, res: express.Response){
    try {
      console.log(req.query.hash)
    const vefificationResult = await UserService.verify(req.query.hash)
    vefificationResult && res.sendFile(path.join(__dirname, '..', 'public/htmls/hashConfirmed.html'))
    } catch (error) {

      res.status(error.status || 500 ).json({
        ResultCode: ResultCodeEnum.error,
        errors: [error]
      })
    }
  } 
}
export const UserController = new _UserController();
