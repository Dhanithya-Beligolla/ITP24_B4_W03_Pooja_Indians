import React from 'react'
import { useQuery } from "react-query"
import BuffetPage from './BuffetPage';
import { getAllBuffets } from '../fetchBuffet/fetchBuffet';


const BuffetPages = () => {

    const {data, isLoading, isError} = useQuery("buffet", getAllBuffets);

    if (isError) {
        console.error(isError);
    }
    
    return (
        <div className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
            rounded-lg relative">
            
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">
                Buffet Page
            </h1>


            {/* map through our data */}
            <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
                    {isLoading && "Loading..."}
                    {isError && "Something went wrong..."}
                    {data && data.map((buffetAdmin, i) => (
                        <BuffetPage buffetAdmin={buffetAdmin} key={i} />
                    ))}

            </div>
        </div>
    );
};

export default BuffetPages;