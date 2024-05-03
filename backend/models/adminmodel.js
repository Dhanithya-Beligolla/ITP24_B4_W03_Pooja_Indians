const mongoose=require("mongoose")

const trackerregister = mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum length for password
    }



}, {
    timestamps: true

})

const registermodel = mongoose.model("admin", trackerregister)

module.exports = registermodel;