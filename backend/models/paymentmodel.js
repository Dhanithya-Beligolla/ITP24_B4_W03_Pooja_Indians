const mongoose=require("mongoose")

const paymentchema=mongoose.Schema({
    p_method:String,
    amount:String,

        number:String,
      
        address:String,
        email:String,
        date_p:String,
  
  
   

},{
    timestamps:true

})

const paymentmodel=mongoose.model("payments",paymentchema)
module.exports = paymentmodel;

