const express = require("express");
const Poster = require("../modules/poster.js");

const route = express.Router();

//get all poster users
route.get("/", async(req, res) => {
    try {
        const allPosters = await Poster.find({});
        res.status(200).json({status : "SUCCESS", allPosters });
    } catch (error) {
        res.status(500).json({status : "FAILED", error});
     }
});

//create a new poster
route.post("/create", async(req, res) => {
    try {
        const newPoster = await Poster.create(req.body);
        res.status(200).json({status : "SUCCESS", newPoster });
    } catch (error) {
        res.status(500).json({status : "FAILED", error});
    }
});

//get single poster
route.get("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const singlePoster = await Poster.findById(id);
        res.status(200).json({status : "SUCCESS", singlePoster });
    } catch (error) {
        res.status(500).json({status : "FAILED", error});
    }
})

module.exports = route;