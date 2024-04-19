
//pass:Q6zIs4Jjoc45VTzK

const express = require('express');
const mongoose = require('mongoose');
const router= require('./Route/ComplainRoute');

const app = express();
const cors = require('cors');
require('dotenv').config();
//middleware setup
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001"
}));
app.use("/complains",router)

mongoose.connect("mongodb+srv://Admin:Q6zIs4Jjoc45VTzK@cluster0.uimvzb7.mongodb.net/")
    .then(() => {
        console.log("Connected to mongodb");
    })
    .then(() =>{
        app.listen(process.env.PORT, () => {
           
            console.log(`Server is runningng  new on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    }); 


