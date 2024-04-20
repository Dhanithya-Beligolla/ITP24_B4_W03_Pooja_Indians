const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||8020




const orderschema=mongoose.Schema({
    type:String,
    quentity:String,
    extra:String,
    quentity:String,
    date:String,
  
  
   

},{
    timestamps:true

})

const ordermodel=mongoose.model("Orders",orderschema)



app.get("/",async(req,res)=>{
    const data= await ordermodel.find({})
  
    res.json({success:true,data:data})
})


app.post("/create",async(req,res)=>{
    const data=new ordermodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


app.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await ordermodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
const data=await ordermodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})




app.get("/count",async(req,res)=>{
    try{
        const users=await ordermodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})

app.get("/order/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const order = await ordermodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

const paymentchema=mongoose.Schema({
    type_p:String,
    number:String,
    number:String,
    date_p:String,
  
  
   

},{
    timestamps:true

})

const paymentmodel=mongoose.model("payments",paymentchema)






app.post("/create_payment",async(req,res)=>{
    const data=new paymentmodel(req.body)
    await data.save()
})    

mongoose.connect("mongodb+srv://anjalibhagya22:1424a@cluster0.bc1d0nw.mongodb.net/rooms?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful"))
}).catch((err)=>{
    console.log(err)
})

