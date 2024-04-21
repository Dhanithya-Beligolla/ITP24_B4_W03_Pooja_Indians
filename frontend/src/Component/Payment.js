
import { useState } from "react";
import axios from "axios";


function AddPayment(){
    const [order,setorder]=useState({
        amount:"",

        number:"",
      
        address:"",
        email:"",
        date_p:"",
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8020/create_payment",order)
          console.log(data)
          alert("add payment!")
         
     
    }
  


    return(
        <div className="add-order">
           
<h2>Check Out</h2>
    <form onSubmit={handlesubmit}>
    <lable>Payment Method:</lable>
    <select  id="p_method" name="p_method" onChange={handleonchange}>
      
      <option>card</option>
      <option>cash</option>
      <option>cod</option>
        
    </select><br></br>
    <lable>Amount :</lable>
    <input type="text" id="Amount" name="Amount" onChange={handleonchange} /><br></br>
    <lable>Phone Number :</lable>
    <input type="number" id="number" name="number" onChange={handleonchange}/><br></br>
    <lable>Address:</lable>
    <input type="text" id="Address" name="Address" onChange={handleonchange}/><br></br> 
    <lable>Email:</lable>
    <input type="email" id="email" name="email"onChange={handleonchange} /><br></br>
    <lable>Date:</lable>
    <input type="date" id="date_p" name="date_p"onChange={handleonchange} /><br></br> 
    <button>Payment</button>

    </form><br></br> 
   <a href="repoart">check out</a>
        </div>
    )
}
export default AddPayment;