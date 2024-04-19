import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
         <nav>
      <ul>
        <li>
          <Link to="/mainhome">Home</Link>
        </li>
        <li>
          <Link to="/addcomplains">Add Complain</Link>
        </li>
        <li>
          <Link to="/complaindetails">Complain Details</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
