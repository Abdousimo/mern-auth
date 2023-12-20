const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

/*mongoose.connect(,()=>{

})
.then()
.catch(error){
   error.message
}

*/

app.listen(process.env.PORT,()=>{
    console.log(`app runned in port : ${process.env.PORT}`)
})


