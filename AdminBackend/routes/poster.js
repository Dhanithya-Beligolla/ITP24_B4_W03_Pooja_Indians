const express = require("express");
const Poster = require("../modules/poster.js");

const route = express.Router();

//get all poster users
route.get("/", (req, res) => {
    res.status(200).json("this is the fist poster api.");
});

route.post("/create", async(req, res) => {
    try {
        const newPoster = await Poster.create(req.body);
        res.status(200).json({status : "SUCCESS", newPoster });
    } catch (error) {
        res.status(500).json({status : "FAILED", error});
    }
});

module.exports = route;