import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


function BuffetPage  ({buffetAdmin = {}}) {
  const { buffetType, buffetPrice, buffetDescription, image, specialOffers } = buffetAdmin;

  return (
    <div>
      <div className={`border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg p-4 w-[30%]`}>
        <h2 className="text-lg font-bold text-gray-700">{buffetType} </h2>
        <img className="w-full h-[12rem] object-cover" src={image && folder + image} alt="buffetImg" />
        <p className="text-gray-600"> {buffetDescription}</p>
        <p className="text-gray-600">Per Person: {buffetPrice}</p>
        <p className="text-gray-600">Offers Available: {specialOffers}</p>

      </div>
      <div className="flex justify-end mt-4">
        <button className="text-red-500 mr-2">
          <FaTrashAlt />
        </button>
        <button className="text-blue-500">
          <MdEdit />
        </button>
      </div>
    </div>
  )
}

export default BuffetPage;