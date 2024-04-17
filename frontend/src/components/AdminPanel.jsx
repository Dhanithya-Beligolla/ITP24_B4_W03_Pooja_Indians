import React from 'react'
import { useNavigate } from "react-router-dom";


const AdminPanel = () => {

    const navigate = useNavigate();
    

  return (
    <div className="w-[100%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
    rounded-lg relative">
        <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">AdminPanel</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={navigate("/")} style={{ flex: 1, fontSize: '80px', backgroundColor: 'orange' }}>View Reservations</button>
            <button onClick={navigate("/buffet-pages")} style={{ flex: 1, fontSize: '80px', backgroundColor: 'orange' }}>Buffet Page Settings</button>
        </div>

    </div>
  )
}

export default AdminPanel;