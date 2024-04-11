import React from "react";
import './style.css';

function JobStatusBar() {
   return (
       <div className="container">
           <h1 className="title-text">Job Status Bar</h1>

           <div className="application">
               <span className="name">Application 1</span>
               <div className="status-bar">
                   <div className="status" style={{width: '80%'}}></div>
               </div>
           </div>
           <div className="application">
               <span className="name">Application 2</span>
               <div className="status-bar">
                   <div className="status" style={{width: '60%'}}></div>
               </div>
           </div>
           <div className="application">
               <span className="name">Application 3</span>
               <div className="status-bar">
                   <div className="status" style={{width: '40%'}}></div>
               </div>
           </div>
           <div className="application">
               <span className="name">Application 4</span>
               <div className="status-bar">
                   <div className="status" style={{width: '20%'}}></div>
               </div>
           </div>
           <div className="application">
               <span className="name">Application 5</span>
               <div className="status-bar">
                   <div className="status" style={{width: '90%'}}></div>
               </div>
           </div>
       </div>
   )
}

export default JobStatusBar;
