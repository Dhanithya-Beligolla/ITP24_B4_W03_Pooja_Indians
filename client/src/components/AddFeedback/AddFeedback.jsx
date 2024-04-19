import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation,useQueryClient } from 'react-query';
import { addFeedback,updateFeedback } from '../../fetchContact/FetchContact';
import { FeedbackContextShare } from '../../coontext/Coontext';
import { useEffect } from 'react';

const AddFeedback = () => {
  
    const navigate=useNavigate();
    
    const [feedback,setFeedback]=useState({
      fullName:"",
      email:"",
      phoneNumber:"",
      feedback:"",
      image:"",
      date:"",
    });

    const{update,setUpdate}=FeedbackContextShare();


    const queryClient = useQueryClient();


    //add new feedback
    const { mutate, isLoading, isError } = useMutation(addFeedback,{
      onSuccess: () => {
        alert("Review added successfully");
      },
    })

    //update feedback
    const {
      mutate: updateFeedbacks,
    } = useMutation(updateFeedback, {
      onSuccess: () => {
        queryClient.invalidateQueries("feedback");
        alert("Review updated successfully");
      },
    });
   
    useEffect(() => {
      if(update){
        setFeedback({
          ...feedback,
          fullName:update.fullName,
          email:update.email,
          phoneNumber:update.phoneNumber,
          feedback:update.feedback,
          image:update.image,
          date:update.date.split("T")[0],
          _id: update._id,
        })
      }
    },[])

    const handleSubmit=(e) =>{
      e.preventDefault();
      if(update){
        updateFeedbacks(feedback);
        navigate("/");

      }else{
        mutate(feedback);
        navigate("/");
      }
    };

  return (
    <section>
        <button onClick={() => navigate(-1)} className='button ml-5 px-3 my-4'> Go back</button>
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit} className='border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md'>
              
                <h1 className='text-center text-xl font-medium'>{update ? "Update Review" : "Add Review"}</h1>
                <input value={feedback.fullName} 
                 onChange={(e) =>
              setFeedback({ ...feedback, fullName: e.target.value })}
             className='input' type="text" placeholder='Full Name'/>

                <input value={feedback.email}  onChange={(e) =>
              setFeedback({ ...feedback, email: e.target.value })} className='input' type="email" placeholder='Email...'/>

                <input value={feedback.phoneNumber}  onChange={(e) =>
              setFeedback({ ...feedback, phoneNumber: e.target.value })} className='input' type="text" placeholder='Phone Number...'/>

                <input value={feedback.date}  onChange={(e) =>
              setFeedback({ ...feedback, date: e.target.value })}  className='input'  type="Date" />

                <textarea value={feedback.feedback}  onChange={(e) =>
              setFeedback({ ...feedback, feedback: e.target.value })} className='input' placeholder='Write your review...'></textarea>

                <input  onChange={(e) =>
              setFeedback({ ...feedback, image: e.target.files[0] })} type="file" placeholder='Full Name'/>

                <button className='button1 bg-green-600'>{update ? "Update" : "Submit"}</button>

            </form>
        </div>
    </section>
  )
}

export default AddFeedback;  