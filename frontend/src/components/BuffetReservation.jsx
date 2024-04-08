import React from 'react'

const BuffetReservation = ({buffetreservation}) => {
  const { fristname, lastname, mobile, email, buffetType, date, quantity, price } = buffetreservation;
  return (
    <div>
      <div className="border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg p-4 w-[30%]">
        <h2 className="text-lg font-bold text-gray-700">{fristname} {lastname}</h2>
        <p className="text-gray-600">Mobile: {mobile}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Buffet Type: {buffetType}</p>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Price: {price}</p>
      </div>
    </div>
  )
}

export default BuffetReservation;