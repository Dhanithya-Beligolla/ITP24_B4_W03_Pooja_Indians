import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom"; // Import useHistory for navigation

function AddPayment() {
    const history = Link(); // Initialize useHistory hook
    const [order, setOrder] = useState({
        Name: "",
        number: "", 
        address: "",
        email: "",
        
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

        // Validate name
        if (!order.Name.trim()) {
            newErrors.Name = "Name is required";
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
            history.push("/paymentmethod"); // Navigate to paymentmethod page after successful submission
        }
    };

    return (
        <div className="add-order">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" id="Name" name="Name" value={order.Name} onChange={handleChange} />
                {errors.Name && <span className="error">{errors.Name}</span>}
                <br />
                <label>Phone Number:</label>
                <input type="text" id="number" name="number" value={order.number} onChange={handleChange} />
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
                <button type="submit">Payment</button>
            </form>
            <br />
            <Link to="/paymentmethod">Go to Payment Method</Link> {/* Link to paymentmethod page */}
        </div>
    );
}

export default AddPayment;