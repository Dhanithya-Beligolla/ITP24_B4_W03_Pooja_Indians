const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.status(200).json("This is the new main page of the api");
})

app.listen(process.env.PORT, () => {
    console.log("App is running at port"+process.env.PORT);
});