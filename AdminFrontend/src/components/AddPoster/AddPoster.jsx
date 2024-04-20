import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddPoster = () => {
  const navigate = useNavigate();
  return (
    <section>
        <button
        onClick={() => navigate("/")}
            className="absolute top-[2rem] left-[4rem] button px-5 text-sm"
        >vacancy posters</button>

        <div className="flex items-center justify-center h-screen">
            <form className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md
            shadow-md shadow-gray-400 m-5 lg:m-0">
                <h1 className="text-center text-xl font-medium">Add job vacancies</h1>
                <input className='input' type='text' placeholder='enter job title...' />
                <input className='input' type='text' placeholder='enter description...' />
                <input type='file' />
                <button className='button'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default AddPoster