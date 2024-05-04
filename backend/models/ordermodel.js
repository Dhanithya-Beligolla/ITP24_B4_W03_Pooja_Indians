const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    type:String,
    quantity:String,
    subItems:String,
    subQuantity:String,
    date:String,
  
  
   

},{
    timestamps:true

})

const ordermodel=mongoose.model("Orders",orderschema)
module.exports = ordermodel;

