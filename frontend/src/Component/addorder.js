import React, { useState } from "react";
import axios from "axios";
import './addorder.css';
import logo from './134-1344280_add-items-to-cart-minimalist-shopping-cart.jpg';
import { useNavigate } from "react-router-dom";

function AddOrder(){
    const navigate = useNavigate();

    const [order, setOrder] = useState({
        type: "",
        quantity: "",
        extra: "",
        subQuantity: "",
        date: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Simple validation
        const errors = {};
        if (!order.type.trim()) {
            errors.type = "Order Items is required";
        }
        if (!order.quantity) {
            errors.quantity = "Quantity is required";
        }
        if (!order.extra.trim()) {
            errors.extra = "Sub Items is required";
        }
        if (order.subQuantity === "") {
            errors.subQuantity = "Sub Quantity is required";
        }
        if (!order.date) {
            errors.date = "Date is required";
        }
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post("http://localhost:8020/create", order);
                console.log(response.data);
                alert("Order added to Cart!");
                navigate("/orderdetails");
            } catch (error) {
                console.error("Error adding order: ", error);
            }
        }
    };
    

    return (
        <div className="add-order">
            <a className='img' href="/orderdetails"> <img src={logo} alt='Logo' width="130px"></img></a>
            <h2>Order Place</h2>
            <form onSubmit={handleSubmit}>
                <label>Order Items:</label>
                <input type="text" name="type" value={order.type} onChange={handleChange} />
                {errors.type && <div className="error">{errors.type}</div>}
                <br />
                <label>Quantity:</label>
                <input type="number" min="1" name="quantity" value={order.quantity} onChange={handleChange} />
                {errors.quantity && <div className="error">{errors.quantity}</div>}
                <br />
                <label>Sub Items :</label>
                <input type="text" name="extra" value={order.extra} onChange={handleChange} />
                {errors.extra && <div className="error">{errors.extra}</div>}
                <br />
                <label>Sub Quantity:</label>
                <input type="number" min="1" name="subQuantity" value={order.subQuantity} onChange={handleChange} />
                {errors.subQuantity && <div className="error">{errors.subQuantity}</div>}
                <br />
                <label>Date</label>
                <input type="date" name="date" value={order.date} onChange={handleChange} />
                {errors.date && <div className="error">{errors.date}</div>}
                <br />
                <button>Add to cart</button>
            </form>
            <br />
        </div>
    );
}

export default AddOrder;
