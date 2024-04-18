import { useEffect, useState } from 'react'
import axios from "axios"
import './report.css'

function Reportdetails(){
    const [countlist,setcountlist]=useState([]);
    const [customerlist,setcustomerlist]=useState([]);


//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8030/count_rooms")
   const { count } = data.data;
   setcountlist(count);//get count
   setcustomerlist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])





    
return(
    <div className='report-rooms'>
  <h3>Total Rooms in Customeres needed </h3>
            {countlist !== null ? (
                <p>Total Rooms: {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}

<h3> Rooms Details :</h3>
 

    

                  
                         <table>
                            <tr>
                            <th>Customer  Name</th>
              <th>Phone Number</th>
              
              <th>Number of Rooms</th>
              <th>Number of People</th>
          
                            </tr>
<tbody>
    {
customerlist.map((e)=>{
                return(
                            <tr>
                               <td> {e.name}</td> 
                            <td> {e.phone}</td> 
    
                            <td> {e.quentity_rooms}</td> 
                            <td> {e.quentity_people}</td> 
 
                            </tr>
                )
                              })
}
                            </tbody>
                        </table>
                        
            
              

                     
                    
                
                
          
           

    </div>
)




}
export default Reportdetails;
