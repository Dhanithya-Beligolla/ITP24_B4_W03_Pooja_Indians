import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './paymentreport.css';

function Paymentreport() {
    const [plist, setplist] = useState(null);
    const [paymentlist, setpaymentlist] = useState([]);

    const getfetchdata=async()=>{
        try{
        const data=await axios.get("http://localhost:8020/count")
       const { count } = data.data;
       setplist(count);//get count
       setpaymentlist(data.data.data);//get table data
     
    }catch(err){
        alert(err)
    }
    }
    useEffect(()=>{
        getfetchdata()   
    },[])

    return (
        <div className="preport">
            <h3>Total Payment</h3>
            {plist !== null ? (
                <p>Total Payment: {plist}</p>
            ) : (
                <p>Loading...</p>
            )}

            <h3>Summary Payment</h3>
            <table> <tr>
                 <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Date</th>
                       
                    </tr>
                
                <tbody>
                    {
                    paymentlist.map((e)=>{
                        return(
                        <tr>
                            <td>{e.p_method}</td>
                            <td>{e.amount}</td>
                            <td>{e.Phonenumber}</td>
                            <td>{e.address}</td>
                            <td>{e.email}</td>
                            <td>{e.date_p}</td>
                           
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </div>
    );
}

export default Paymentreport;
