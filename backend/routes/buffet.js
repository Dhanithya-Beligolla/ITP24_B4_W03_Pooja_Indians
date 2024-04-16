const express = require("express");
const Buffet = require("../modules/buffet.js");

const route = express.Router();


//get all Buffet reservations 
route.get("/", async (req, res) => {
    try {
        const allReservations = await Buffet.find({});
        res.status(200).json({status: "SUCCESS", allReservations});
    } catch (error) {
        res.status(500).json({status: "FAILED", error}); 
    }
});

//create a Buffet reservation
route.post("/create", async (req, res) => {
    try {
        const newReservation= await Buffet.create(req.body);
        res.status(200).json({status: "SUCCESS", newReservation});
    } catch (error) {
        res.status(500).json({status: "FAILED", error});
    }
});

//get a one user's Buffet reservation by id
route.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const singleReservation = await Buffet.findById(id);
        res.status(200).json({status: "SUCCESS", singleReservation});
    } catch (error) {
        res.status(500).json({status: "FAILED", error});
    }
});

//update a one user's Buffet reservation by id
route.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const updatedSingleReservation = await Buffet.findByIdAndUpdate(id, req.body);
        res.status(200).json({status: "SUCCESS", updatedSingleReservation});
    } catch (error) {
        res.status(500).json({status: "FAILED", error});
    }
});


//delete a one user's Buffet reservation by id
route.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const removedSingleReservation = await Buffet.findByIdAndDelete(id);
        res.status(200).json({status: "SUCCESS", removedSingleReservation});
    } catch (error) {
        res.status(500).json({status: "FAILED", error});
    }
});


module.exports = route;