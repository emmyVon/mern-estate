import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import mongo from 'mongoose'
import authrouter from './router/authrout.js'
import errorhandler from './error/errormiddleware.js'

dotenv.config()

const App = express()

App.use(express.json())

App.use('/mern/auth',authrouter)

App.use(errorhandler)

const Start = async ()=>{
    await mongo.connect(process.env.MONGO_URI)
    App.listen(5000,()=>{
    console.log('app is listening on port 5000')
})

}


Start()