const User = require("../models/User.model");
const bcryptjs = require('bcryptjs')


module.exports = {
    signup : async function(req,res){
      const { username, email, password } = req.body;
      const hashedPassword = bcryptjs.hashSync(password,10)
      const newUser = new User({username, email, password: hashedPassword})
      try {
        await newUser.save()
        res.status(201).json({message:"user created successfullly !"})
      } catch (error) {
        res.status(500).json(error.message)
      }
      
   }
}
   