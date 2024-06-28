const mongoose = require("mongoose");

const buffetadminSchema = new mongoose.Schema({
    buffetType: {
        type: String,
        required: true,
    },
    buffetPrice: {
        type: Number,
        required: true,
    },
    buffetDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        
    },
    specialOffers: {
        type: String,
        
    },
},
    {timeStamps: true, collection: "buffetAdmin"}
);

const BuffetAdmin = mongoose.model("buffetAdmin", buffetadminSchema);

module.exports = BuffetAdmin;