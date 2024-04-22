const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        maxlength: 20,
        minlenght: 3
    },
    location: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Places = mongoose.model("Blog",blogSchema);
module.exports = Blog