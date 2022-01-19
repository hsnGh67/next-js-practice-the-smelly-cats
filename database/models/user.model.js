import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true , "Email is required"],
        trim : true,
        unique : [true , "User already exists"],
        validate:{
            validator : validator.isEmail,
            message : "email is not correct"
        }
    },
    password : {
        type : String,
        required : [true , "Password is required"],
        trim : true,
        minlength : [6 , "Password minimum length is 6"]
    },
    firstname : {
        type : String,
        trim : true,
        default : ""
    },
    lastname : {
        type : String,
        trim : true,
        default : ""
    },
    role : {
        type : String,
        enum : ['user' , 'admin'],
        default : 'user'
    }
})

export default mongoose.models.User || mongoose.model("User" , userSchema)