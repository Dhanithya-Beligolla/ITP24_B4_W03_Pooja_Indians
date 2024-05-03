const express=require('express');
const Form=require('../module/form.js');
const route = express.Router();

//get all feedback
route.get('/',async(req,res) =>{
   try{
        const allReview=await Form.find({});
        res.status(200).json({status:"SUCCESS",allReview});
   }catch{
        res.status(500).json({status:"FAILED",error});
   }
});

//add feedback
route.post("/create",async(req,res) =>{
    try{
        const newReview=await Form.create(req.body);
        res.status(200).json({status:"SUCCESS",newReview});
    }
    catch(error){
        res.status(500).json({status:"FAILED",error});
    }
});

//get one feedback by id
route.get("/:id",async(req,res) =>{
    const id=req.params.id;
    try{
        const oneReview=await Form.findById(id);
        res.status(200).json({status:"SUCCESS",oneReview});
    }catch(error){
        res.status(500).json({status:"FAILED",error});

    }
});


//update feedback by id
route.put("/update/:id",async(req,res) =>{
    const id=req.params.id;
    try{
        const updateReview=await Form.findByIdAndUpdate(id,req.body);
        res.status(200).json({status:"SUCCESS",updateReview});
    }catch{
        res.status(500).json({status:"FAILED",error});
    }
});

//delete feedback by id
route.delete("/delete/:id",async(req,res) =>{
    const id=req.params.id;
    try{
        const deleteReview=await Form.findByIdAndDelete(id);
        res.status(200).json({status:"SUCCESS",deleteReview});
    }catch{
        res.status(500).json({status:"FAILED",error});
    }
});

//get feedback with ratings
route.get("/:id",async(req,res) =>{
    const id=req.params.id;
    try{
        const oneReviewrating=await Form.findById(id);
        res.status(200).json({status:"SUCCESS",oneReview});
    }catch(error){
        res.status(500).json({status:"FAILED",error});

    }
});

module.exports = route;