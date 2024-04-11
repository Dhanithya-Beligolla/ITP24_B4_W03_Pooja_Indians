import React from "react"
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const BuffetReservation = ({buffetreservation}) => {
  const { fristname, lastname, mobile, email, buffetType, date, quantity, price } = buffetreservation;
  return (
    <div>
      <div className={`border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg p-4 w-[${fristname.length * 10}%]`}>
        <h2 className="text-lg font-bold text-gray-700">Reservation ID: </h2>
        <p className="text-gray-600">First Name: {fristname}</p>
        <p className="text-gray-600">Last Name: {lastname}</p>
        <p className="text-gray-600">Mobile: {mobile}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Buffet Type: {buffetType}</p>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Price: {price}</p>
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

export default BuffetReservation;