import React from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";
import {useQuery} from "react-query";
import { getAllData } from "../fetchContact/FetchContact";

const Review = () => {
    const data1 = [
        {
          id: 1,
          fullName: "Amir Amiri",
          email: "amir@gmail.com",
          phoneNumber: 123412312341234,
          feedback:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",

          image:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
          birth: "12/14/2000",
        },
        {
          id: 2,
          fullName: "Amir Amiri",
          email: "amir@gmail.com",
          phoneNumber: 123412312341234,
          feedback:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
          image:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
          birth: "12/14/2000",
        },
        {
          id: 3,
          fullName: "Amir Amiri",
          email: "amir@gmail.com",
          phoneNumber: 123412312341234,
          feedback:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",

          image:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
          birth: "12/14/2000",
        },
        {
          id: 4,
          fullName: "Amir Amiri",
          email: "amir@gmail.com",
          phoneNumber: 123412312341234,
          feedback:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",

          image:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
          birth: "12/14/2000",
        },
        {
          id: 5,
          fullName: "Amir Amiri",
          email: "amir@gmail.com",
          phoneNumber: 123412312341234,
          feedback:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",

          image:
            "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
          birth: "12/14/2000",
        },
      ];

      const {data, isLoading, isError}= useQuery("form",getAllData);
      
      console.log(data);  

      const navigate=useNavigate();
    return (
        <div  className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
        rounded-lg relative">
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">Review application</h1>

            <div onClick={() => navigate("/add")} className="text-right mr-10"><button className="button text-sm px-4 font-bold">Add Your Review</button></div>

            <div className="p-4 lg:p-7  items-center flex-wrap gap-5 w-[95%] mx-auto">
              {isLoading && <p className="text-black font-bold">Loading...</p>}
              {isError && <p className="text-black font-bold">Something went wrong...</p> }
                {data?.length==0?(
                    <div className="text-black font-bold">No feedback found</div>
                ):
                data?.map((datas, i) => (
                    <Feed datas={datas} key={i} />
                ))}
            </div>
        </div>
    );
}

export default Review;