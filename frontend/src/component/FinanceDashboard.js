import { useEffect, useState } from 'react'
import axios from "axios"
import './repoart.css'

function Repoart(){
    const [countlist,setcountlist]=useState([]);
    const [paylist,setpaylist]=useState([]);


//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8040/count_pay")
   const { count } = data.data;
   setcountlist(count);//get count
   setpaylist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])





    
return(
    <div className='repaor-finance'>
  <h3>Total salary Items:</h3>
            {countlist !== null ? (
                <p>Total salary  items: {countlist}
               
              
                </p>
                
            ) : (
                <p>Loading...
                     </p>
          
               
            )}

<h3> Salary Items Repoart :</h3>
 

    

                  
                         <table>
                            <tr>
                            <th>Basic Salary</th>
                            <th>  Increasing Basic salary According to Allowance </th>
                            <th> Discreasing Basic salary  According to Deductions </th>
                            <th>Discreasing Basic salary According to  Other Deductions</th>
                            </tr>
<tbody>
    {
paylist.map((e)=>{
                return(
                            <tr>
                                <td>
                                {e.basicSalary} 
                                </td>
                                <td>
                                {e.basicSalary=e.basicSalary+(e.bonus*100/20)}
                                </td>
                                <td>
                                 {e.basicSalary=e.basicSalary-(e.deductionTax*100/20)}

                                </td>
                                <td>
                                    {e.basicSalary=e.basicSalary-(e.other*100/20)}
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
export default Repoart;