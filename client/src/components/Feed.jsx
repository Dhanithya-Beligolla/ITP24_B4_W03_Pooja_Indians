import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useMutation } from 'react-query';
import { removeFeedback } from '../fetchContact/FetchContact';
import { FeedbackContextShare } from '../coontext/Coontext';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const Feed = ({datas}) => {
const {fullName, email,phoneNumber,image,feedback,_id } = datas;
const{setUpdate,update}=FeedbackContextShare();
const navigate=useNavigate();
const folder = import.meta.env.VITE_IMAGE_URL;

//remove feedback
const { mutate, isLoading, isError } =useMutation(
  ["feedback",_id],removeFeedback,{
    onSuccess: () => {
      alert("Review deleted successfully");
    },
  
  });

  //update feedback
  const handleUpdate = () => {
    setUpdate(datas);
    navigate("/add");

  };


  return (
    <div className='w-[55rem] bg-sky-50 shadow-md shadow-gray-400 overflow-hidden rounded-lg mb-10 ' >
      
      <div className='flex gap-10'>
      <img src={folder+image} alt="image" className="w-20 h-20 rounded-full ml-8" />
      <span className="text-lg font-bold text-blue-500">{fullName}</span>
      <div className='ml-[250px]'>
      <  StarRating/>
      </div>
      </div>
        
       
      <div className='ml-[150px] '>
        
        <p className="">{feedback}</p>
      </div>
    <div className="mt-4 ml-[800px] mb-5">
    <button className="text-white bg-red-500 p-2 rounded mr-2" onClick={() => mutate(_id)}><FaTrash/></button>
    <button className="text-white bg-blue-500 p-2 rounded" onClick={handleUpdate}><FaEdit/></button>
    </div>
    </div>
    
  )
}

export default Feed;