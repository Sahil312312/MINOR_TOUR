const mongoose = require("mongoose")

const placesSchema = new mongoose.Schema({
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
    rate:{
        type:Number,
        required:[true,"Please provide your password"]
    },
    image:{
        type:String,
        required:true
    }
})

const Places = mongoose.model("Places",placesSchema);
module.exports = Places