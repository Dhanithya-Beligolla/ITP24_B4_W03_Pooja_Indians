
import { useState } from "react";
import axios from "axios";


function AddPayment(){
    const [order,setorder]=useState({
        type_p:"",
        number:"",
      
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
          alert("Order added to Cart!")
         
     
    }
    const paymentOptions = ['COD','Cash','Card'];


    return(
        <div className="add-order">
           
<h2>payment</h2>
    <form onSubmit={handlesubmit}>
    <lable>Payment Option:</lable>
    <select>
        <option value="">choose one</option>
        {paymentOptions.map((type,index) => (
            <option key={index} value={type}>{type}</option>
        ))}
    </select><br></br>
    <lable>Amount :</lable>
    <input type="text" id="Amount" name="Amount" /><br></br>
    <lable>Phone Number :</lable>
    <input type="text" id="number" name="number" /><br></br>
    

    <lable>Date:</lable>
    <input type="date" id="date_p" name="date_p" /><br></br> 
    <button>payment</button>
    </form><br></br> 
   
        </div>
    )
}
export default AddPayment;