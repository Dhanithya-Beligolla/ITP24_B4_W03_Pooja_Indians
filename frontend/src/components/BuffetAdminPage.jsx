import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { deleteBuffet } from '../fetchBuffet/fetchBuffet';


const BuffetPage = ({ buffetAdmin}) =>{
  const { buffetType, buffetPrice, buffetDescription, image, specialOffers, _id } = buffetAdmin;
  const navigate = useNavigate();

  const folder = import.meta.env.VITE_REACT_FOLDER;

  console.log('Buffet data:', buffetAdmin);

  //delete buffet
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation(["buffetadmin", _id],deleteBuffet, {
    onSuccess: () => queryClient.invalidateQueries("buffetadmin"),
  });
  

  return (
    <div>
      <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
        <h2 className="text-lg font-bold text-gray-700">{buffetType} </h2>
        <img className="w-full h-[12rem] object-cover" src={image && folder + image} alt="buffetImg" />
        <div className="p-3 text-sm flex flex-col gap-1">
          <p className="text-gray-600"> {buffetDescription}</p>
          <p className="text-gray-600">Per Person: {buffetPrice}</p>
          <p className="text-gray-600">Offers Available: {specialOffers}</p>
        </div>
      
        <div className="p-3 flex items-center justify-end gap-2">
          <button onClick={() => mutate(_id)} className="cursor-pointer text-red-700 hover:opacity-75">
            <FaTrashAlt />
          </button>
          <button className="text-xl text-blue-600 hover:opacity-75">
            <MdEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuffetPage;
