import React from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";
import {useQuery} from "react-query";
import { getAllData } from "../fetchContact/FetchContact";
import NavBar from "./NavBar";
import image from '../assets/jj.jpg';


const Review = () => {
 
    const {data, isLoading, isError}= useQuery("form",getAllData);
      
      console.log(data);  

      const navigate=useNavigate();
      
      return (
        <div>
          <NavBar/>
          <img src={image}  className="w-full h-[300px] object-cover " />
          <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '20px'
      }}>
        <div className="font-bold mb-[200px] text-[40px]">
        Share your experience with us!<br></br>
        
        <div  onClick={() => {
            navigate("/add");
            window.location.reload();
          }} className="text-right mr-[200px]">
            <button className="button text-sm px-4 font-bold ">Add Your Review</button>
          </div>
        </div>
       
      </div>

         
        <div  className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
        rounded-lg relative">
          

          

          <div className="p-4 lg:p-7  items-center flex-wrap gap-5 w-[95%] mx-auto">
            {isLoading && <p className="text-black font-bold">Loading...</p>}
            {isError && <p className="text-black font-bold">Something went wrong...</p> }
            {data?.length===0 ? (
              <div className="text-black font-bold">No feedback found</div>
            ) : (
              data?.map((datas, i) => (
                <Feed datas={datas} key={i} />
              ))
            )}
          </div>
        </div>
        </div>
      );
}

export default Review;