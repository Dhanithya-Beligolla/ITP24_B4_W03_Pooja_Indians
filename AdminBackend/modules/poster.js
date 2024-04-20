const mongoose = require("mongoose");

const posterSchema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    },
    { timeStamps: true, collection : "posters" }
);

const Poster = mongoose.module("poster", posterSchema);

module.exports = Poster;