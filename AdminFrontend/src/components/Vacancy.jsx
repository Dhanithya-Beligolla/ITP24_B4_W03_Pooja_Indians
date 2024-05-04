import React from 'react';

const Vacancy = ({poster}) => {
    const { jobTitle, jobDescription, image, _id } = poster;

    const folder = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
            <img className="w-full h-[12rem] object-cover" src={folder + image} alt="posterImg" />

            <div className="p-3 text-sm flex flex-col gap-1">
                <p>Job title : {jobTitle}</p>
                <p>Description : {jobDescription}</p>
            </div>

        </div>
    )
}

export default Vacancy;