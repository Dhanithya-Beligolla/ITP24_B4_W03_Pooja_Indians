const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const password = encodeURIComponent('emply@1234');
const uri = `mongodb+srv://emply:${password}@cluster0.dnh01im.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('MongoDB Error', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);