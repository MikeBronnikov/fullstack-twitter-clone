import { body } from 'express-validator';


const passwordMinLegth: number = 6

export const registerValidations = [
    body('email', 'enter email').isEmail().withMessage('incorrect email'),
    body('fullname', 'enter fullname').isString(),
    body('password', 'enter password').isLength({min: passwordMinLegth}).withMessage('need 6 letters or more')        
    ]