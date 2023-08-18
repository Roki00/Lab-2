import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userShema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
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
});

//ketu e bojm passwordin bcrypt qe me mujt me i compare me passin qe shkruajm
userShema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);

};

const User = mongoose.model("User", userShema)

export default User