import mongoose from 'mongoose';

const userShema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    emai:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default:false
    }
},{
    timestamps:true
})

const User = mongoose.model("User", userShema)

export default User