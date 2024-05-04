// const mongoose=require("mongoose")
// const roomsschema = mongoose.Schema({
    
    
//     name: {
//         type: String,
//         required: true
//     },

//     phone: {
//         type: Number,
//         required: true,
//     },

//     email: {
//         type: String,
//         required: true,
//     },

//     date: {
//         type: Date,
//         required: true
//     },

//     quentity_rooms: {
//         type: Number,
//         required: true,
//         min: 1 // Minimum number of rooms
//     },

//     quentity_people: {
//         type: Number, 
//         required: true,
//         min: 1 // Minimum number of people
//     }


// }, {
//     timestamps: true

// })

// const roomsmodel = mongoose.model("rooms", roomsschema)
// module.exports = roomsmodel;

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  quantity_rooms: {
    type: Number,
    required: true,
    min: 1
  },
  quantity_people: {
    type: Number,
    required: true,
    min: 1
  }
}, { timestamps: true });

const roomsModel = mongoose.model("rooms", roomSchema);

module.exports = roomsModel;
