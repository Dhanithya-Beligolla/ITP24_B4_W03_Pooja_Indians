const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/database.js');
const formRoute = require('./routes/form.js');
const multer=require('multer');
const app = express();
const cors = require("cors");
const path = require("path");

dotenv.config();

app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:5173' // replace with your client's origin
  }));


app.get("/",(req,res) =>{
    res.status(200).send("tHIS IS THE RESPOND");
});

//path the image with url
app.use("/upload", express.static(path.join(__dirname, "/upload")));

//upload image
const storage=multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'upload');
    },
    filename:(req,file,cb) =>{
        cb(null,req.body.name);// this is error
    },
});

const upload=multer({storage:storage});

app.post("/api/upload",upload.single('file'),(req,res) =>{
    res.status(200).json({ststus:"SUCCESS", msg:"Image has been uploaded"});
});


//route
app.use('/api/form',formRoute);



app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is runningng  new on port ${process.env.PORT}`);
});