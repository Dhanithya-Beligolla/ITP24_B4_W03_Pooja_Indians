import React from 'react'
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"
import BuffetPage from './BuffetPage';
import { getAllBuffets } from '../fetchBuffet/fetchBuffet';


const BuffetPages = () => {

  const {data, isLoading, isError} = useQuery("buffetadmin", getAllBuffets);
    

  const navigate = useNavigate();

  return (
    <div
      className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
      rounded-lg relative">
      <div />
      <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">
        Buffet Page
      </h1>

      <div className="text-right mr-10">
        <button
          onClick={() => navigate("/add-buffet")}
          className="button text-sm px-4">
          Add Buffet
        </button>
      </div>
       {/* map through our data */}
      <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
            {isLoading && "Loading..."}
            {isError && "Something went wrong..."}
            {data && data.map((buffetAdmin, i) => (
                <BuffetPage buffetAdmin={buffetAdmin} key={i} />
            ))}

      </div>
    </div>
  )
}

export default BuffetPages;