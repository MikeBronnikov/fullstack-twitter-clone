import express from 'express'
import { passport } from '../core/passport';
const router = express.Router()

router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log(req)
    res.json(req.user)
})


export default router