import { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './repoart.css'
import {useReactToPrint} from 'react-to-print';

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

const ComponentsRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>ComponentsRef.current,
        DocumentTitle:"Complains report",
        onAfterPrint:()=>alert("Complain report download successfully!")
        
    });


    
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

<h3> Salary Items Report :</h3>
 

    

                  
                         <table ref={ComponentsRef}>
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
                                {e.basicSalary=e.basicSalary+(e.bonus*2/100)}
                                </td>
                                <td>
                                 {e.basicSalary=e.basicSalary-(e.deductionTax*2/100)}

                                </td>
                                <td>
                                    {e.basicSalary=e.basicSalary-(e.other*2/100)}
                                </td>
                            
 
                            </tr>
                )
                              })
}
                            </tbody>
                        </table>
                        
         <button onClick={handlePrint} >Download pdf</button>
            
       
                     
                    
                
                
          
           

    </div>
)




}
export default Repoart;