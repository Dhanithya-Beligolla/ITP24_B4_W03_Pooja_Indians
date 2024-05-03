const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const OrderRoutes = require("./routes/orderroutes");
const PaymentRoutes = require("./routes/paymentroutes");



const app=express()

app.use(cors())
app.use(express.json())
app.use("/", OrderRoutes);
app.use("/", PaymentRoutes);

const PORT=process.env.PORT||8020







mongoose.connect("mongodb+srv://anjalibhagya22:1424a@cluster0.bc1d0nw.mongodb.net/rooms?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful"))
}).catch((err)=>{
    console.log(err)
})

