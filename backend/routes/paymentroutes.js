const express=require("express")


const paymentmodel = require("../models/paymentmodel");

const router = express.Router();


router.post("/create_payment",async(req,res)=>{
    const data=new paymentmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})

module.exports = router;