import  { useEffect, useState } from 'react'
import axios from "axios"
import './roomdetails.css'

function RoomsDetails(){
    const [showrooms,setshowrooms]=useState([]);

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8030/")
    console.log(data.data.success)
    if(data.data.success){
        setshowrooms(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:8030/delete/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Discount item deleted Successfully!")
    }
}
    return(
        <div className="showrooms">
            <h2>Rerevation Details</h2>
 <table>
              
              <tr>
              <th>Customer  Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Reservation Date</th>
              <th>Number of Rooms</th>
              <th>Number of People</th>
              <th>Action</th>
              
              </tr>


              <tbody>
                  { 
                     showrooms.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.name}</td> 
                            <td> {e1.phone}</td> 
                            <td> {e1.email}</td> 
                            <td> {e1.date}</td> 
                            <td> {e1.quentity_rooms}</td> 
                            <td> {e1.quentity_people}</td> 
                            
                            <td>
                              <a href={`/roomsupdate/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Item</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
        </div>
    )
}
export default RoomsDetails;
