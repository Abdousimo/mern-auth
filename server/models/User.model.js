import mongoose from "mongoose";

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

export default User;