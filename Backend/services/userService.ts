import { CreateConfirmHTML } from './../core/nodeMailer/confirmHTML';
import { sendEmail } from "./../utils/sendEmail";
import { generateHash } from "./../utils/generateHash";
import { UserModel } from "./../models/userModel";
import ApiError from '../error/ApiError'
import bcrypt from 'bcrypt'
import { isValidObjectId } from "mongoose";
class _UserService {
  async create(body: any) {
    const data =  {
      email: body.email,
      username: body.username,
      fullname: body.fullname,
      password: await bcrypt.hash(body.password, 10),
      confirmed_hash: generateHash(Math.random().toString()),
    };
    const newUser = await UserModel.create(data);
    let mailInfo = sendEmail({
      emailFrom: "admin@twitter.com",
      emailTo: newUser.email,
      subject: "Подтверждение почты Twitter Clone Tutorial",
      html: CreateConfirmHTML(data.confirmed_hash) 
    });
    // if (Object.keys(mailInfo).length === 0){throw ApiError.internal('error durdding sendinfg a message', '', '', '', )}
    return newUser;
  }
  async findUser(id:string){
   if(  !id || !isValidObjectId(id) ){
     throw ApiError.badRequest('invalid id', 'id', 'params', id, 422)
   }
   const foundUser = await UserModel.findById(id)

   if (!foundUser){
     throw ApiError.badRequest('user with sended id does not exist', 'id', 'params', id, 422)
   }
   return foundUser
  }

  async verify(hash: any){
    if (!hash){
      throw ApiError.badRequest('there is no hash', 'hash', 'query', hash, 422)
    }
    
    const foundUser = await UserModel.findOne({confirmed_hash: hash})

    if (foundUser === null) {
      throw ApiError.badRequest('incorrect or expired hash', 'hash', 'query', hash, 422)
    }

    return await foundUser.updateOne({confirmed: true})
    
  }


  async loginAsPassportVetify(username: string, password: string, done: any): Promise<any>{
 if (!username  || !password){ return done(null, false) }
  let user = await UserModel.findOne({$or: [{"email": username}, {"username": username }]})
  let isPasswordsSame = await bcrypt.compare(password, user.password) //first param as a plain text
  isPasswordsSame ? done(null, user) : done(null, false)
  }

  async jwtVerify(payload: any, done: any){
    try {
      return done(null, payload.userID)
    } catch (error) {
      console.log(error)
      return done(error, false)
    }
  }

}


export const UserService = new _UserService();
