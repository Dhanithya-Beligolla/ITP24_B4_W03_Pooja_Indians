import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>

      <Link to="/complaindetails" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Complain  details</Link>
      <Link to="/addcomplains" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Complain</Link>
    </div>
  )
}
