const mongoose=require("mongoose")
const roomsschema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    date: Date,
    quentity_rooms: Number,
    quentity_people: Number,




}, {
    timestamps: true

})

const roomsmodel = mongoose.model("rooms", roomsschema)
module.exports = roomsmodel;