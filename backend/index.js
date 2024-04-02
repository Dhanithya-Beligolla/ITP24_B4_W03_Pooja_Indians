const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const buffetRouter = require("./routes/buffet.js");

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("This is the new main page of the api");
});

//routes
app.use("/api/buffet", buffetRouter);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App is running at port"+process.env.PORT);
});