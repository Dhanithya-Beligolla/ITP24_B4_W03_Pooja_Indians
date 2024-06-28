import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const BuffetPage = ({buffetAdmin}) => {    
    const { buffetType, buffetPrice, buffetDescription, image, specialOffers, _id} = buffetAdmin;

    const navigate = useNavigate();

    const folder = import.meta.env.VITE_REACT_FOLDER;

    const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
     <div className="w-[100%] shadow-md shadow-gray-400 overflow-hidden rounded-lg border border-ash" onClick={() => setShowPopup(true)}>
      <h2 className="text-lg font-bold text-gray-700 items-center justify-center">{buffetType} </h2>
      <img className="w-full h-[12rem] object-cover" src={image && folder + image} alt="buffetImg" />
      
      <div className="p-3 text-sm flex flex-col gap-1">
        <p className="text-gray-600"> {buffetDescription}</p>
        <p className="text-gray-600">Per Person: {buffetPrice}</p>
        <p className="text-gray-600">Offers Available: {specialOffers}</p>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-4 rounded-lg">
            <AiOutlineClose className="absolute top-2 right-2 cursor-pointer" onClick={(event) => { event.stopPropagation(); setShowPopup(false); }} />
            <h2 className="text-lg font-bold text-gray-700">{buffetType} </h2>
            <img className="w-full h-[12rem] object-cover" src={image && folder + image} alt="buffetImg" />
            <div className="p-3 text-sm flex flex-col gap-1">
              <p className="text-gray-600"> {buffetDescription}</p>
              <p className="text-gray-600">Per Person: {buffetPrice}</p>
              <p className="text-gray-600">Offers Available: {specialOffers}</p>
            </div>

            <button onClick={() => navigate("/make-reservation")} className="button text-sm px-4">Make Reservation</button>
            
          </div>
        </div>
      )}
    

    </div>
  </div>
  )
}

export default BuffetPage;

