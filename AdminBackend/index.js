const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const posterRouter = require("./routes/poster.js");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.status(200).json("this new is the main page of the api");
});

//route
app.use("/api/poster", posterRouter);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App is running at port " + process.env.PORT);
});