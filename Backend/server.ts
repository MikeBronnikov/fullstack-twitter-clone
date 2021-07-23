import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'

import bodyParser from 'body-parser';
import {passport} from './core/passport'

import Usersrouter from './routes/usersRouter'
import Authrouter from './routes/authRouter'

const app = express()
const PORT = process.env.PORT || 8001
const db_connection_url = 'mongodb+srv://admin:ptKh2iGH6qCDE@cluster0.92m1k.mongodb.net/Twitter?retryWrites=true&w=majority'


mongoose.connect(db_connection_url, {
    "useNewUrlParser": true,
    "useCreateIndex": true,
    "useUnifiedTopology": true
})


app.use(express.json())

app.use(passport.initialize());
app.use('/users', Usersrouter)
app.use('/auth', Authrouter)

app.listen(PORT, ()=>{console.log('SERVER RUNNED')})