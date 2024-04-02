const mongoose = require("mongoose");

const buffetSchema = new mongoose.Schema({
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
{timeStamp: true, collection: "buffets"}
);

const Buffet = mongoose.model("buffet", buffetSchema);

module.exports = Buffet;