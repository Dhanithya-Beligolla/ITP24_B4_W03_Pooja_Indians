import axios from "axios";

import { useEffect, useState } from "react"; // Add this import statement

//base url
const baseURL=import.meta.env.VITE_BASEURL;

//get all the data from api
export const getAllData =async () =>{
    try{
        const res=await axios.get(`${baseURL}/api/form`);
        return res.data.allReview;
    }catch(error){
        console.log(error);
    }
};

//create a  new feedback
export const addFeedback=async (data) =>{

    //if there is any image in the usestate
    if(data.image){
        const form = new FormData();
        const name = Date.now() + data.image.name;
        form.append("name", name);
        form.append("file", data.image);
        data.image = name;

        try{
            await axios.post(`${baseURL}/api/upload`, form);
        }catch(error){
            throw new Error(error);
        }
    } 
    
    try{
        const res = await axios.post(`${baseURL}/api/form/create`, data);
        return res.newReview;
    }catch(error){
        throw new Error(error);

    }
    
}

// remove feedback details
export const removeFeedback = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/form/delete/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  };

  //update feedback details
  export const updateFeedback=async(data) =>{
    try{
        await axios.put(`${baseURL}/api/form/update/${data._id}`, data);
    }catch(error){
        throw new Error(error);
    }
  }

