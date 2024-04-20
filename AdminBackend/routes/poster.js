const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
    res.status(200).json("this is the fist poster api.");
});

module.exports = route;