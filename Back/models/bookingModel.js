const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name is required"],
        maxlength: 20,
        minlenght: 3
    },
    eamil: {
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    price:{
        type:Number,
        required:true
    }

})

const Booking = mongoose.model("Booking",BookingSchema);
module.exports = Booking