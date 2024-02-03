const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/Auth.route.js')


const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB')
}) 
.catch((error)=>{
   console.log(error.message)
})

app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`app runned in port : ${process.env.PORT}`)
})





