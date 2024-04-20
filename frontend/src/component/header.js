import React from "react";
import { Link } from "react-router-dom";
import "./headerStyles.css";


function Header() {
  return (
    <nav className="navbar bg-custom">
      <div className="container">
        <Link className="brand" to="#">
          Financial Management System
        </Link>
        <div>
          <ul>
            <li >
              <Link className="lnk active" to="/salarydetails">
                Salary Details
              </Link>
            </li>
            <li>
              <Link className="lnk active" to="/">
                Add New Salary
              </Link>
            </li>
            
            <li>
              <Link className="lnk active" to="repoartfinance">
               Report 
              </Link>
            </li>
          
         </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
