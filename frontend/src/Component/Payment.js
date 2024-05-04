import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

function AddPayment() {
    const [order, setOrder] = useState({
        amount: "",
        Phonenumber: "",
        address: "",
        email: "",
        date_p: "",
    });

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const validationErrors = {};
        if (!order.amount) {
            validationErrors.amount = "Amount is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(order.amount)) {
            validationErrors.amount = "Invalid amount format";
        }
        if (!order.Phonenumber) {
            validationErrors.Phonenumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(order.Phonenumber)) {
            validationErrors.Phonenumber = "Phone number must be 10 digits";
        }
        if (!order.address) {
            validationErrors.address = "Address is required";
        }
        if (!order.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(order.email)) {
            validationErrors.email = "Invalid email address";
        }
        if (!order.date_p) {
            validationErrors.date_p = "Date is required";
        }

        // Other validation rules...

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8020/create_payment", order);
            console.log(response);
            alert("Payment added!");
        } catch (error) {
            console.error("Error adding payment:", error);
        }
    };

    return (
        <div className="add-order">
            <h2>Check Out</h2>
            <form onSubmit={handleSubmit}>
            <label>Payment Method:</label>
                <select id="p_method" name="p_method" onChange={handleOnChange}>
                    <option>card</option>
                    
                </select><br />
                <label>Amount :</label>
                <input type="number" min="0" max="50000" id="amount" name="amount" onChange={handleOnChange} />
                {errors.amount && <div className="error">{errors.amount}</div>}<br />
                <label>PhoneNumber :</label>
                <input type="text" id="Phonenumber" name="Phonenumber" onChange={handleOnChange} />
                {errors.Phonenumber && <div className="error">{errors.Phonenumber}</div>}<br />
                <label>Address:</label>
                <input type="text" id="address" name="address" onChange={handleOnChange} />
                {errors.address && <div className="error">{errors.address}</div>}<br />
                <label>Email:</label>
                <input type="email" id="email" name="email" onChange={handleOnChange} />
                {errors.email && <div className="error">{errors.email}</div>}<br />
                <label>Date:</label>
                <input type="date" id="date_p" name="date_p" onChange={handleOnChange} />
                {errors.date_p && <div className="error">{errors.date_p}</div>}<br />

                <button type="submit">Payment</button>
            </form>
            <br />
            
            <Link to="/paymentreport">Check out</Link>
        </div>
    );
}

export default AddPayment;
