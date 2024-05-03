import { useEffect, useState } from 'react'
import axios from "axios"
import './paymentreport.css'

function PaymentReport(){
    const [countlist,setcountlist]=useState([]);
    const [customerlist,setcustomerlist]=useState([]);


//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8020/count")
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
   
    <div className='paymentrepoart'>
  <h3>Total Orders :</h3>
            {countlist !== null ? (
                <p>Total Payment: {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}

<h3> Summary payment :</h3>
 

    

                  
                         <table>
                            <tr>
                            <th>Payment method</th>
                            <th>Amount</th>
              <th>Phone PhoneNumber</th>
              <th>Address</th>
              <th>Email</th>
              <th>Date</th>
              
             
            
             
                            </tr>
                            
                            
<tbody>
    
    {
customerlist.map((e)=>{
                return(
                            <tr>
                                <td>
                                {e.type} 
                                </td>
                                <td>
                                {e.Quentity}
                                </td>
                                <td>
                                {e.extra}
                                </td>
                                <td>
                                {e.quentity}
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
export default PaymentReport;