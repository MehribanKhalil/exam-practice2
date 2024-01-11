import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './src/router/productRouter.js'


const app=express()
app.use(cors())
app.use(express.json())
dotenv.config()


app.use("/api",router)

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(url).then(console.log('db connected'))

app.listen(PORT,()=>{
    console.log("server is running");
})