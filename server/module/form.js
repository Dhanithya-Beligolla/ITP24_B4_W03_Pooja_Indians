const mongoose=require('mongoose');

const formSchema =new mongoose.Schema(
    {
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    feedback:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    date:{
        type:Date,
    },
   
},
{
    timestamps:true,
    collection:'form'
}
);

const Form = mongoose.model('form',formSchema);
module.exports = Form;