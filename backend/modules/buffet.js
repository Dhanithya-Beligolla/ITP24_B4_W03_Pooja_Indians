const mongoose = require("mongoose");

const buffetReservationSchema = new mongoose.Schema({
    fristname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    buffetType: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},
    {timeStamps: true, collection: "buffetReservations"}
);

const Buffet = mongoose.model("buffet", buffetReservationSchema);

module.exports = Buffet;