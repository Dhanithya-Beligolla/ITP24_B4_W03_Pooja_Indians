const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||8030

const roomsschema=mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    date:String,
    quentity_rooms:String,
    quentity_people:String,

   
    
 
 },{
     timestamps:true
 
 })
 
 const roomsmodel=mongoose.model("rooms",roomsschema)
 // read
 app.get("/",async(req,res)=>{
     const data= await roomsmodel.find({})
   
     res.json({success:true,data:data})
 })
 
 // create
 app.post("/create",async(req,res)=>{
     const data=new roomsmodel(req.body)
     await data.save()
     res.send({success:true,message:"rooms added successfuly"})
 })
 
 // update
 app.put("/update",async(req,res)=>{
     const {id,...rest}=req.body
     const data=await roomsmodel.updateOne({_id:id},rest)
     res.send({success:true,message:"updated successfuly",data:data})
 })
 
 
 // delete
 app.delete("/delete/:id",async(req,res)=>{
 const id=req.params.id
 const data=await roomsmodel.deleteOne({_id:id})
 res.send({success:true,message:"deleted successfully",data:data})
 })
 
 
 // fetch updated
 app.get("/rooms/:id", async (req, res) => {
     const id = req.params.id;
 
     try {
         const discount = await roomsmodel.findById(id);
 
         if (!discount) {
             return res.status(404).send({ success: false, message: "User not found" });
         }
 
         res.send({ success: true, message: "User fetched successfully", data: discount });
     } catch (error) {
         console.error(error);
         res.status(500).send({ success: false, message: "Internal Server Error" });
     }
 });
 
 //get count in rooms table
 app.get("/count_rooms",async(req,res)=>{
     try{
         const users=await roomsmodel.find({});
 
         return res.status(200).json({
             count:users.length,
             data:users
         })
 
     }catch(err){
             console.log(err.message);
             res.json({success:true,message:"discount count successfully",data:data})
     }
 
 })
 



//////////////////////////////////////////////////////////////////////////////////////////////////////




mongoose.connect("mongodb+srv://jana2002:xA6Rc7k7mbDCakKA@roomdb.lrb35lm.mongodb.net/?retryWrites=true&w=majority&appName=RoomDB").then(()=>{
    console.log(`server connection ${PORT} !`);
    app.listen(PORT,()=>console.log("server connection successful "))
}).catch((err)=>{
    console.log(err)
})
