const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const posterRouter = require("./routes/poster.js");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({credentials: true, origin: true}));

app.get("/", (req, res) => {
    res.status(200).json("this new is the main page of the api");
});

//upload poster image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload");
    },
    filename: (req, file, cb) => {
        cb(null, "image.png");
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json({status : "SUCCESS", msg : "Image has been upload"});
});

//route
app.use("/api/poster", posterRouter);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("App is running at port " + process.env.PORT);
});