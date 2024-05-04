import React from 'react'
import Poster from './Poster';
import { useQuery } from 'react-query';
import { getAllData } from '../fetchPoster/fetchPoster';
import Vacancy from './Vacancy';

const Vacancys = () => {
    

    const { data, isLoading, isError} = useQuery("poster", getAllData);

    console.log(data)
    return (
        <div className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
        rounded-lg ">
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">Available job Vacncies</h1>


            {/* maping data*/}
            <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Something went wrong!!..</p>}
                {data?.length == 0  ? (<p>No Poster exist</p>
                ) : (
                    data?.map((poster, i) => <Vacancy poster={ poster } key={ i } />)
                )}
            </div>
        </div>
    )
}

export default Vacancys;