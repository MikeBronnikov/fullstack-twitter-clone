import { registerValidations } from './validators/register';
import { UserController } from './controllers/userController';
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 8001
const db_connection_url = 'mongodb+srv://admin:ptKh2iGH6qCDE@cluster0.92m1k.mongodb.net/Twitter?retryWrites=true&w=majority'


mongoose.connect(db_connection_url, {
    "useNewUrlParser": true,
    "useCreateIndex": true,
    "useUnifiedTopology": true
})

app.use(express.json())

app.get('/users', UserController.index)
app.post('/users', registerValidations, UserController.create)

app.listen(PORT, ()=>{console.log('SERVER RUNNED')})