const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        maxlength: 20,
        minlenght: 3
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default : "user"
    },
    password:{
        type:String,
        required:[true,"Please provide your password"]
    }
})

const User = mongoose.model("User",userSchema);
module.exports = User