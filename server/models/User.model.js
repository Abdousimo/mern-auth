const  mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: false,
    },
    password: {
        type: String,
        required: true,
    }
},{timestamps: true});


const User = mongoose.model('User',userShema);

module.exports = User;