import React from 'react'
import  {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
export default function AddComplain() {
    const history=useNavigate();
    const [inputs,setInputs]=useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });

    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/complaindetails"));
    } 

    const sendRequest=async()=>{
        await axios.post("http://localhost:3000/complains",{
            name:inputs.name,
            email:inputs.email,
            subject:inputs.subject,
            message:inputs.message,
        
        }).then(res =>res.data);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-bold mb-5">Add Your Complain</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
        <input type="text" name="name" value={inputs.name} onChange={e => setInputs({...inputs, name: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email:
        <input type="email" name="email" value={inputs.email} onChange={e => setInputs({...inputs, email: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
    Subject:
    <select name="subject" value={inputs.subject} onChange={e => setInputs({...inputs, subject: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">Select a subject</option>
        <option value="quality issue">Quality Issue</option>
        <option value="technical issue">Technical Issue</option>
        <option value="product issue">Product Issue</option>
    </select>
</label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Message:
        <textarea name="message" value={inputs.message} onChange={e => setInputs({...inputs, message: e.target.value})} rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />      </label>
      <input type="submit" value="Submit your ticket" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      
    </form>
    </div>
  )
}