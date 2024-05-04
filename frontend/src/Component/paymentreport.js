import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './paymentreport.css';

function Paymentreport() {
    const [countlist, setCountlist] = useState(null);
    const [customerlist, setCustomerlist] = useState([]);

    useEffect(() => {
        const getFetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8020/count');
                const { count, data } = response.data;
                setCountlist(count);
                setCustomerlist(data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
                alert('Error fetching payment data');
            }
        };

        getFetchData();
    }, []);

    return (
        <div className="preport">
            <h3>Total Payment</h3>
            {countlist !== null ? (
                <p>Total Payment: {countlist}</p>
            ) : (
                <p>Loading...</p>
            )}

            <h3>Summary Payment</h3>
            <table>
                <thead>
                    <tr>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {customerlist.map((e, index) => (
                        <tr key={index}>
                            <td>{e.p_method}</td>
                            <td>{e.amount}</td>
                            <td>{e.Phonenumber}</td>
                            <td>{e.address}</td>
                            <td>{e.email}</td>
                            <td>{e.date_p}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Paymentreport;
