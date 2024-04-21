import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addPoster } from '../../fetchPoster/fetchPoster';

const AddPoster = () => {
  const navigate = useNavigate();

  const [poster, setPoster] = useState({
    jobTitle: "",
    jobDescription: "",
    image: "",
  });

  ///add new poster
  const { mutate, isLoading, isError} = useMutation(addPoster, {
    onSuccess : (data) => console.log(data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(poster);
    navigate("/");
  };
  return (
    <section>
        <button
        onClick={() => navigate("/")}
            className="absolute top-[2rem] left-[4rem] button px-5 text-sm"
        >vacancy posters</button>

        <div className="flex items-center justify-center h-screen">
            <form 
                onSubmit={handleSubmit}
                className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md
                  shadow-md shadow-gray-400 m-5 lg:m-0">


                <h1 className="text-center text-xl font-medium">Add job vacancies</h1>
                <input
                  value={poster.jobTitle} 
                  onChange={(e) => setPoster({...poster, jobTitle : e.target.value})
                } 
                  className='input' 
                  type='text' 
                  placeholder='enter job title...' 
                />
                <input
                  value={poster.jobDescription} 
                  onChange={(e) => setPoster({...poster, jobDescription : e.target.value})
                } 
                  className='input' 
                  type='text' 
                  placeholder='enter description...'
                />
                <input
                onChange={(e) => 
                  setPoster({...poster, image : e.target.files[0]})
                } 
                  type='file' 
                />
                <button className='button'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default AddPoster;