import express from 'express'
import dotenv from 'dotenv'
import mongo from 'mongoose'

dotenv.config()

const App = express()

const Start = async ()=>{
    await mongo.connect(process.env.MONGO_URI)
    App.listen(5000,()=>{
    console.log('app is listening on port 5000')
})

}


Start()