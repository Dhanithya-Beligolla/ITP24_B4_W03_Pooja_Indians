const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    type:String,
    Quentity:String,
    extra:String,
    quentity:String,
    date:String,
  
  
   

},{
    timestamps:true

})

const ordermodel=mongoose.model("Orders",orderschema)
module.exports = ordermodel;

