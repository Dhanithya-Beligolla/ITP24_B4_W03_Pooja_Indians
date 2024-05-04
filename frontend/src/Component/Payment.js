import React, { useState } from "react";
import axios from "axios";

function AddPayment() {
    const [order, setOrder] = useState({
        p_method: "card",
        amount: "",
        number: "",
        address: "",
        email: "",
        date_p: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate amount
        if (!order.amount.trim()) {
            newErrors.amount = "Amount is required";
            isValid = false;
        }

        // Validate number
        if (!order.number.trim()) {
            newErrors.number = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(order.number)) {
            newErrors.number = "Phone number must be 10 digits";
            isValid = false;
        }

        // Validate address
        if (!order.address.trim()) {
            newErrors.address = "Address is required";
            isValid = false;
        }

        // Validate email
        if (!order.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(order.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        // Validate date_p
        if (!order.date_p.trim()) {
            newErrors.date_p = "Date is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const data = await axios.post("http://localhost:8020/create_payment", order);
                console.log(data);
                alert("Payment successful!");
            } catch (error) {
                console.error("Error occurred:", error);
                alert("Payment failed. Please try again later.");
            }
        }
    };

    return (
        <div className="add-order">
            <h2>Check Out</h2>
            <form onSubmit={handleSubmit}>
                <label>Payment Method:</label>
                <select id="p_method" name="p_method" value={order.p_method} onChange={handleChange}>
                    <option value="card">Card</option>
                    <option value="cash">Cash</option>
                    <option value="cod">COD</option>
                </select><br />
                <label>Amount:</label>
                <input type="number" min="1" max="80000" id="amount" name="amount" value={order.amount} onChange={handleChange} />
                {errors.amount && <span className="error">{errors.amount}</span>}
                <br />
                <label>Phone Number:</label>
                <input type="number" id="number" name="number" value={order.number} onChange={handleChange} />
                {errors.number && <span className="error">{errors.number}</span>}
                <br />
                <label>Address:</label>
                <input type="text" id="address" name="address" value={order.address} onChange={handleChange} />
                {errors.address && <span className="error">{errors.address}</span>}
                <br />
                <label>Email:</label>
                <input type="email" id="email" name="email" value={order.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <label>Date:</label>
                <input type="date" id="date_p" name="date_p" value={order.date_p} onChange={handleChange} />
                {errors.date_p && <span className="error">{errors.date_p}</span>}
                <br />
                <button type="submit">Payment</button>
            </form><br />
            <a href="repoart">check out</a>
        </div>
    );
}

export default AddPayment;
