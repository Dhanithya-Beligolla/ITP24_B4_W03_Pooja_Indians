import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation,useQueryClient } from 'react-query';
import { addFeedback,updateFeedback } from '../../fetchContact/FetchContact';
import { FeedbackContextShare } from '../../coontext/Coontext';
import { useEffect } from 'react';



const AddFeedback = () => {
  
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { update, setUpdate } = FeedbackContextShare();

  const [feedback, setFeedback] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    feedback: "",
    image: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!feedback.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z ]{1,15}$/.test(feedback.fullName.trim())) {
      errors.fullName = 'Full Name should contain only letters and spaces, between 1 and 15 characters';
      isValid = false;
    }

    if (!feedback.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(feedback.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!feedback.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(feedback.phoneNumber.trim())) {
      errors.phoneNumber = 'Phone Number must be 10 digits';
      isValid = false;
    }

    if (!feedback.feedback.trim()) {
      errors.feedback = 'Feedback is required';
      isValid = false;
    } else if (feedback.feedback.trim().length < 1 || feedback.feedback.trim().length > 100) {
      errors.feedback = 'Feedback must be between 1 and 100 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    if(update){
      setFeedback({
        ...feedback,
        fullName: update.fullName,
        email: update.email,
        phoneNumber: update.phoneNumber,
        feedback: update.feedback,
        image: update.image,
        date: update.date.split("T")[0],
        _id: update._id,
      })
    }
  },[update])

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      if (update) {
        updateFeedbacks(feedback);
      } else {
        mutate(feedback);
      }
      navigate("/");
    }
  };

  const { mutate, isLoading, isError } = useMutation(addFeedback, {
    onSuccess: () => {
      alert("Review added successfully");
    },
  });

  const { mutate: updateFeedbacks } = useMutation(updateFeedback, {
    onSuccess: () => {
      queryClient.invalidateQueries("feedback");
      alert("Review updated successfully");
    },
  });

  return (
    <section>
        <button onClick={() => navigate(-1)} className='button ml-5 px-3 my-4'> Go back</button>
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit} className='border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md'>
              
                <h1 className='text-center text-xl font-medium'>{update ? "Update Review" : "Add Review"}</h1>
                <input 
                  value={feedback.fullName} 
                  onChange={(e) => setFeedback({ ...feedback, fullName: e.target.value })}
                  className='input' 
                  type="text" 
                  placeholder='Full Name'
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}

                <input 
                  value={feedback.email}  
                  onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                  className='input' 
                  type="email" 
                  placeholder='Email...'
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}

                <input 
                  value={feedback.phoneNumber}  
                  onChange={(e) => setFeedback({ ...feedback, phoneNumber: e.target.value })}
                  className='input' 
                  type="text" 
                  placeholder='Phone Number...'
                />
                {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}

                <textarea 
                  value={feedback.feedback}  
                  onChange={(e) => setFeedback({ ...feedback, feedback: e.target.value })}
                  className='input' 
                  placeholder='Write your review...'
                ></textarea>
                {errors.feedback && <span className="text-red-500">{errors.feedback}</span>}

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{feedback.feedback.length}/100 characters</span>
                  
                </div>

                <button className='button1 bg-green-600'>{update ? "Update" : "Submit"}</button>

            </form>
        </div>
    </section>
  );
}

export default AddFeedback;