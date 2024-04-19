import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Compl(props) {
  const navigate=useNavigate();
   console.log(props); 

    if (!props.complain) {
      return <div>No complain data</div>;
  }

    const{_id,name,email,subject,message}=props.complain;

    const deleteHandler=async()=>{
      await axios.delete(`http://localhost:3000/complains/${_id}`)
      .then((res) => res.data)
      .then(() => navigate("/"))
      .then(() => navigate("/complaindetails"))
      window.alert("Complain has been marked as solved.");
      window.location.reload();

    }

  return (
    <div className="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-md flex items-center space-x-4">
        
        <div>
                <div className="text-xl font-medium text-white">Complain {props.index}</div>
                <p className="text-white">ID: {_id}</p>
                <p className="text-white">Name: {name}</p>
                <p className="text-white">Email: {email}</p>
                <p className="text-white">Subject: {subject}</p>
                <p className="text-white">Message: {message}</p>
                <button onClick={deleteHandler} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Solved &#10003;
                </button>
            </div>    
       
   
    </div>
  )
}
