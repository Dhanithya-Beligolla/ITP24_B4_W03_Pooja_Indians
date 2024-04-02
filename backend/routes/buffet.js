const express = require("express");
const Buffet = require("../modules/buffet.js");

const route = express.Router();


//get all Buffet reservations user
route.get("/", (req, res) => {
    res.status(200).json("This is the frist buffet api");
});

//create a Buffet reservation
route.post("/create", async (req, res) => {
    try {
        const newBuffet = await Buffet.create(req.body);
        res.status(200).json({status: "SUCCESS", newBuffet});
    } catch (error) {
        res.status(500).json({status: "FAILED", error});
    }
});





module.exports = route;