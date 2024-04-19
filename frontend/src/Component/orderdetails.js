import  { useEffect, useState } from 'react'
import axios from "axios"
import './orderdetails.css'

function OrderDetails(){
    const [showdiscounts,setshowdiscounts]=useState([]);

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8020/")
    console.log(data.data.success)
    if(data.data.success){
        setshowdiscounts(data.data.data)
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
    const data=await axios.delete("http://localhost:8020/delete/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
    }
}
    return(
        <div className="showorders">
 <table>
              
              <tr>
              <th>Order Types</th>
              <th>Order Sub Type</th>
              <th>Order Quentity</th>
              <th>Order Date</th>
              <th>Action</th>
             
              
              </tr>


              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.type}</td> 
                            <td> {e1.extra}</td> 
                            <td> {e1.quentity}</td> 
                            <td> {e1.date}</td> 
                         
                           
                            <td>
                              <a href={`/updateorder/${e1._id}`}>Edit Order</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Order</button>
                              <a href="pay">Pay Now</a>
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
export default OrderDetails;