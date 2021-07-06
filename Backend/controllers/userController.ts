import { generateHash } from "./../utils/generateHash";
import { ResultCodeEnum, ResponseInterface } from "./../globalTypes";
import { UserModel } from "./../models/userModel";
import { validationResult } from "express-validator";
import express from "express";

class _UserController {

  async index(
    req: express.Request,
    res: express.Response<ResponseInterface>
  ): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();

      res.status(200).json({
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



  async create(
    req: express.Request,
    res: express.Response<ResponseInterface>
  ): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          data: [],
          errors: errors.array(),
          ResultCode: ResultCodeEnum.error,
        });
        return;
      }
      const data = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: generateHash(req.body.password),
        confirmed_hash: generateHash(Math.random().toString())
      };
      const user = await UserModel.create(data);
      res.status(201).json({
        data: user,
        ResultCode: ResultCodeEnum.succsess,
      });
    } catch (error) {
        console.log(error)
      res.status(500).json({
        errors: error,
        ResultCode: ResultCodeEnum.error,
      });
    }
  }
}
export const UserController = new _UserController();
