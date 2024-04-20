import { useState } from "react";
import axios from "axios";
import './addorder.css'
import logo from './134-1344280_add-items-to-cart-minimalist-shopping-cart.jpg'
import { useNavigate } from "react-router-dom";

function AddOrder(){
    const navigate=useNavigate();

    const [order,setorder]=useState({
        type:"",
        quentity:"",
        extra:"",
        subquentity:"",
        date:"",
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
       const data=await axios.post("http://localhost:8020/create",order)
          console.log(data)
          alert("Order added to Cart!")
        navigate("orderdetails")
         
     
    }
    

    return(
        <div className="add-order">
           <a className='img' href="/orderdetails"> <img src={logo} alt='Logo' width="130px"></img></a>
<h2>Order Place</h2>
    <form onSubmit={handlesubmit}>
    <lable>Order Items:</lable>
    <input type="text" id="type" name="type" onChange={handleonchange}/><br></br>
    <lable>Quentity:</lable>
    <input type="number" id="   Quentity" name="Quentity" onChange={handleonchange}/>
   <br></br> 
    <lable>Sub Items :</lable>
    <input type="text" id="extra" name="extra" onChange={handleonchange}/><br></br>
    <lable>Sub Quentity:</lable>
    <input type="number" id="quentity" name="quentity" onChange={handleonchange}/>
   <br></br> 
    <lable>Date</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br>
    <button>Add to cart</button>
    </form><br></br> 
   
        </div>
    )
}
export default AddOrder;