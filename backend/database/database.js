
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE,{}); // This is the connection string to the database
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;