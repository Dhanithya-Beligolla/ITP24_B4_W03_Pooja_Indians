import React from 'react';
import { VscTrash } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri";

const Poster = ({poster}) => {
    const { title, description, image } = poster;
    return (
        <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
            <img className="w-full h-[12rem] object-cover" src={image} alt="posterImg" />

            <div className="p-3 text-sm flex flex-col gap-1">
                <p>Job title : {title}</p>
                <p>Description : {description}</p>
            </div>
            <div className="p-3 flex items-center justify-end gap-2">
                <button className='text-xl text-red-700 hover:opacity-75'><VscTrash /></button>
                <button className='text-xl text-blue-600 hover:opacity-75'><RiEdit2Line /></button>
            </div>
        </div>
    )
}

export default Poster