import { useEffect, useState } from 'react'
import axios from "axios"
import './repoart.css'

function OrderRepoart(){
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
    <div className='repoart'>
  <h3>Total Orders :</h3>
            {countlist !== null ? (
                <p>Total Orders: {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}

<h3> Summary Orders :</h3>
 

    

                  
                         <table>
                            <tr>
                            <th>Order Types</th>
              <th>Order Sub Type</th>
              <th>Order Quentity</th>
            
             
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
export default OrderRepoart;