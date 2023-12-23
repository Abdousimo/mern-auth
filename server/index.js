const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB')
}) 
.catch((error)=>{
   console.log(error.message)
})


app.listen(process.env.PORT,()=>{
    console.log(`app runned in port : ${process.env.PORT}`)
})


