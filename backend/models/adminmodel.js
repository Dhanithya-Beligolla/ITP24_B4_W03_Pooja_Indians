const mongoose=require("mongoose")
const trackerregister = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,



}, {
    timestamps: true

})

const registermodel = mongoose.model("admin", trackerregister)

module.exports = registermodel;