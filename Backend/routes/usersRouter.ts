import { passport } from '../core/passport';
import { UserController } from './../controllers/userController';
import { registerValidations } from '../validators/users';
import express from 'express'

const router = express.Router()

router.get('/', UserController.index)
router.post('/', registerValidations, UserController.create)
router.get('/me', UserController.findAuthorisedUser)
router.get('/verify', UserController.verify)
router.get('/:id', UserController.findUser)




export default router