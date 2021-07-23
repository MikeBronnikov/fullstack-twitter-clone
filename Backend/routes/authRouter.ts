import { AuthController } from './../controllers/authController';
import express from 'express'
import { passport } from '../core/passport';
const router = express.Router()




router.post('/login',  AuthController.login);

//  router.post('/login', passport.authenticate('local', (req, res, next)=>{
//      res.json('hello')
//  }))


export default router

// async function(err, user, info) {
//     console.log(user)
//     console.log(info)
// }