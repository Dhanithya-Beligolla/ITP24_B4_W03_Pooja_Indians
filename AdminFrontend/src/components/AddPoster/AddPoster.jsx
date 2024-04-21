import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { addPoster, updatePoster } from '../../fetchPoster/fetchPoster'; // Assuming updatePoster is imported
import { PosterContextShare } from '../../../context/Context';

const AddPoster = () => {
  const navigate = useNavigate();
  const { setUpdate, update } = PosterContextShare();

  const [poster, setPoster] = useState({
    jobTitle: "",
    jobDescription: "",
    image: "",
  });

  useEffect(() => {
    if (update) {
      setPoster({
        ...poster,
        jobTitle: update.jobTitle,
        jobDescription: update.jobDescription,
        image: update.image,
        _id: update._id,
      });
    }
  }, [update]); // Added 'update' to dependency array

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(addPoster, {
    onSuccess: () => queryClient.invalidateQueries('poster'), // Changed to invalidate key 'posters'
  });

  const { mutate: updatePosterMutation, isLoading: updateLoading, isError: updateError } = useMutation(updatePoster, { // Changed to 'updatePosterMutation' and 'updateLoading'
    onSuccess: () => queryClient.invalidateQueries('poster'), // Changed to invalidate key 'posters'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update) {
      updatePosterMutation(poster); // Changed to 'updatePosterMutation'
      navigate("/");
    } else {
      mutate(poster);
      navigate("/");
    }
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


          <h1 className="text-center text-xl font-medium">{update ? "Update job vacancies" : "Add job vacancies"}</h1>
          <input
            value={poster.jobTitle}
            onChange={(e) => setPoster({ ...poster, jobTitle: e.target.value })}
            className='input'
            type='text'
            placeholder='enter job title...'
          />
          <input
            value={poster.jobDescription}
            onChange={(e) => setPoster({ ...poster, jobDescription: e.target.value })}
            className='input'
            type='text'
            placeholder='enter description...'
          />
          <input
            onChange={(e) =>
              setPoster({ ...poster, image: e.target.files[0] })
            }
            type='file'
          />
          <button className='button'>{update ? "Update" : "Submit"}</button>
        </form>
      </div>
    </section>
  )
}

export default AddPoster;
