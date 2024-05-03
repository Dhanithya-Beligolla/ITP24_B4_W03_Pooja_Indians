const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    extra: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const orderModel = mongoose.model("Orders", orderSchema);
module.exports = orderModel;
