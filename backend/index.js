const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const adminRoutes = require("./routes/adminroutes");
const roomsRoutes = require("./routes/roomsroutes");



const app = express()

app.use(cors())
app.use(express.json())
app.use("/", adminRoutes);
app.use("/api", roomsRoutes);

const PORT = process.env.PORT || 8030







mongoose.connect("mongodb+srv://jana2002:xA6Rc7k7mbDCakKA@roomdb.lrb35lm.mongodb.net/?retryWrites=true&w=majority&appName=RoomDB").then(() => {
    console.log(`server connection ${PORT} !`);
    app.listen(PORT, () => console.log("server connection successful "))
}).catch((err) => {
    console.log(err)
})
""