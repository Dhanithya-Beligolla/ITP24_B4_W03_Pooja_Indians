import React from 'react';
import { VscTrash } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri";
import { useMutation, useQueryClient } from 'react-query';
import { removePoster } from '../fetchPoster/fetchPoster';
import { PosterContextShare } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Poster = ({poster}) => {
    const { jobTitle, jobDescription, image, _id } = poster;
    const {update,setUpdate} = PosterContextShare();
    const navigate = useNavigate();

    const folder = import.meta.env.VITE_IMAGE_URL;

    //delete posters
    const queryClient = useQueryClient();
    const {mutate, isLoading, isError} = useMutation(
        ["poster", _id], 
        removePoster, 
        {
        onSuccess : () => queryClient.invalidateQueries("poster"),
        }
    );

    //update posters
    const handleUpadate = () => {
        setUpdate(poster);
        navigate("/AddPoster");
    }

    if(isError) return "Somthing went wrong!...";

    return (
        <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
            <img className="w-full h-[12rem] object-cover" src={folder + image} alt="posterImg" />

            <div className="p-3 text-sm flex flex-col gap-1">
                <p>Job title : {jobTitle}</p>
                <p>Description : {jobDescription}</p>
            </div>
            <div className="p-3 flex items-center justify-end gap-2">
                <button 
                onClick={() => mutate(_id)}
                className='text-xl text-red-700 hover:opacity-75'><VscTrash /></button>
                <button 
                onClick={handleUpadate}
                className='text-xl text-blue-600 hover:opacity-75'><RiEdit2Line /></button>
            </div>
        </div>
    )
}

export default Poster;