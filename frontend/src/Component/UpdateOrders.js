import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './orderupdate.css'

function UpdateOrder(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
        type:"",
        quentity:"",
        extra:"",
        quentity:"",
        date:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8020/order/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdateorder(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdateorder({
          ...updateorder,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8020/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updateorder._id,
              ...updateorder,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('Order updated successfully');
           alert("Order updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='order-update'>

<h2>Order Update</h2>
<lable>Order Items:</lable>
    <input type="text" id="type" name="type" onChange={handleInputChange} value={updateorder?.type }/><br></br>
    <lable>Quentity:</lable>
    <input type="text" id="quentity" name="quentity" onChange={handleInputChange} value={updateorder?.quentity}/><br></br>
    <lable>Sub Items :</lable>
    <input type="text" id="extra" name="extra" onChange={handleInputChange} value={updateorder?.extra}/><br></br>
    <lable>Sub Quentity:</lable>
    <input type="text" id="quentity" name="quentity" onChange={handleInputChange} value={updateorder?.quentity}/><br></br> 
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleInputChange} value={updateorder?.date}/><br></br> 
  
  
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
  
 
        </div>
    )
}
export default UpdateOrder;