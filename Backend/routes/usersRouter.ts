import { UserController } from './../controllers/userController';
import { registerValidations } from '../validators/users';
import express from 'express'

const router = express.Router()

router.get('/', UserController.index)
router.post('/', registerValidations, UserController.create)
router.get('/:id', UserController.findUser)
router.get('/verify', UserController.verify)


export default router