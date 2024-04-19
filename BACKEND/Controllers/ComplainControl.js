const Compalin=require('../Model/ComplainModel');

const getAllComplain=async(req,res,next)=>{

    let Complains;
    //display all the data
    //get all complains
    try{
        Complains=await Compalin.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!Complains){
        return res.status(404).json({message:"No complains found"});
    }
    //displayall compllains
    return res.status(200).json({Complains});
};

//data insert
const insertComplain=async(req,res,next)=>{
    //get data from request
    const {name,email,subject,message}=req.body;
    //create object
    const newComplain=new Compalin({
        name,
        email,
        subject,
        message
    });
    //save data
    try{
        await newComplain.save();
    }catch(err){
        console.log(err);
    }
    if(!newComplain){
        return res.status(404).json({message:"Complain not inserted"});
    }
    //inserted
    return res.status(200).json({newComplain});
};

//get by id 
const getById=async(req,res,next)=>{
    const id=req.params.id;
    let complainsid;

    try{
        complainsid=await Compalin.findById(id);
    }catch(err){
        console.log(err);

    }

    if(!complainsid){
        return res.status(404).json({message:"Complain not found"});
    }

    return res.status(200).json({complainsid})

};

//update compain details
const updateComplain=async(req,res,next)=>{
    const id=req.params.id;
    //get data from request
    const {name,email,subject,message}=req.body;

    let complainupdate;
    try{
        complainupdate=await Compalin.findByIdAndUpdate(id,{name:name,email:email,subject:subject,message:message});
        complainupdate=await complainupdate.save();
    }
    catch(err){
        console.log(err);
    
    }
    if(!complainupdate){
        return res.status(404).json({message:"Complain not updated"});
    }

    return res.status(200).json({complainupdate});
}

//delete complain by id
const deleteComplain=async(req,res,next)=>{
    const id=req.params.id;
    let complainDelete;
   
    try{
        complainDelete=await Compalin.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!complainDelete){
        return res.status(404).json({message:" unable delete the complain"});
    }
    return res.status(200).json({complainDelete});
}

exports.getAllComplain=getAllComplain;
exports.insertComplain=insertComplain;
exports.getById=getById;
exports.updateComplain=updateComplain;
exports.deleteComplain=deleteComplain;