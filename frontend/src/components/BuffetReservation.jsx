import React from "react"
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { deleteBuffetReservation } from "../fetchBuffetReservation/FetchBuffetReservation";
import { BuffetContextShare } from "../context/Context";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const BuffetReservation = ({buffetreservation}) => {
  const { fristname, lastname, mobile, email, buffetType, date, quantity, price, _id } = buffetreservation;
  const {setUpdate, update} = BuffetContextShare();
  const navigate = useNavigate();

  console.log(update);

  //delete reservation
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation(["buffetreservation", _id],deleteBuffetReservation, {
    onSuccess: () => {
      alert("Successfully Deleted");
      queryClient.invalidateQueries("buffet");
    },
  });

  //update reservation
  const handleUpdate = () => {
    
    setUpdate(buffetreservation);
    navigate("/make-reservation");
  }



  return (
    <div>
      <div className={`border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg p-4 w-[100%]`} onClick={() => navigate(`/reservation/${_id}`, { state: { reservation: buffetreservation } })}>
        <h2 className="text-lg font-bold text-gray-700">Reservation ID: {_id}</h2>
        <p className="text-gray-600">First Name: {fristname}</p>
        <p className="text-gray-600">Last Name: {lastname}</p>
        <p className="text-gray-600">Mobile: {mobile}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Buffet Type: {buffetType}</p>
        <p className="text-gray-600">Date: {moment(date).format("l")}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Price: {price}</p>
      </div>
      <div className="flex justify-end mt-4">
          <button onClick={() => mutate(_id)} className="text-red-500 mr-2">
            <FaTrashAlt />
          </button>
          <button onClick={handleUpdate} className="text-blue-500">
            <MdEdit />
          </button>
        </div>
    </div>
  )
}

export default BuffetReservation;