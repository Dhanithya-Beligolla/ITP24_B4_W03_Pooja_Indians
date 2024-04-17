import React from 'react'
import { useNavigate } from 'react-router-dom';

const BuffetPage = ({buffetAdmin}) => {    
    const { buffetType, buffetPrice, buffetDescription, image, specialOffers, _id} = buffetAdmin;

    const navigate = useNavigate();

    const folder = import.meta.env.VITE_REACT_FOLDER;

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
        <button onClick={() => navigate("/make-reservation")} className="button text-sm px-4" >Make Resertation</button>
      </div>
    </div>
  </div>
  )
}

export default BuffetPage;