import React, { useRef } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useReactToPrint} from 'react-to-print';
import Compl from './Compl';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>


const url="http://localhost:3000/complains";
const fetchHandler=async()=>{
    return await axios.get(url).then((res) => res.data);
}



export default function DisplayComplains() {

    const[complains,setComplains]=useState();

    useEffect(()=>{
        fetchHandler().then((data)=>{
            setComplains(data.Complains);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    },[]);

    const ComponentsRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>ComponentsRef.current,
        DocumentTitle:"Complains report",
        onAfterPrint:()=>alert("Complain report download successfully!")
        
    });

    const [searchQuery, setSearchQuery] = useState(""); 
    const [noResults, setNoResults] = useState(false);

    const handleSearch = (e) => {
        fetchHandler().then((data) => {
            const filteredComplains=data.Complains.filter((complain) => 
            Object.values(complain).some((field) =>
            field.toString().toLowerCase().includes(searchQuery.toLowerCase())
            ))
            setComplains(filteredComplains);
            setNoResults(filteredComplains.length === 0);
        });
    };
  return (
    <div>
        
        <h1 className='text-black font-bold text-[20px] text-center'>Complains display page</h1>
        <div className='flex items-center justify-center mt-10 mb-10'>
        <input type="text" name='search' placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)}  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button onClick={handleSearch} className="ml-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700">Search</button>
        <button onClick={handlePrint} className="ml-[140px] bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
    Download report
    <i className="fas fa-download ml-2"></i>
    </button>
        </div>
     
        {noResults ?(
            <div>
                <p>No complains found!!</p>
            </div>
        ):(
        <div className='grid grid-cols-3 gap-4' ref={ComponentsRef}>
            {complains && complains.map((complain,i)=>(
                    <div key={i} className="p-4 border rounded shadow bg-white">
                        <Compl complain={complain} index={i + 1}/>
                    </div>
           ) )}

        </div>
        )}
     
    </div>
  )
}
