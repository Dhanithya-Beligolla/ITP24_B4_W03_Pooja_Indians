import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addorder.css';
import logo from './134-1344280_add-items-to-cart-minimalist-shopping-cart.jpg';
import addorderbackground1 from '../../src/Component/addorderbackground1.jpg';

function AddOrder() {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false); // Add isClicked state

    const [order, setOrder] = useState({
        type: "",
        quantity: "", // Changed Quentity to quantity
        subItems: "",
        subQuantity: "", // Changed subQuentity to subQuantity
        date: "",
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("http://localhost:8020/create", order);
        console.log(data);
        alert("Order added to Cart!");
        navigate("/orderdetails");
    };

    return (
        <div className={`add-order-background-image ${isClicked ? 'white-box' : 'transparent-box'}`} style={{ backgroundImage: `url(${addorderbackground1})` }}>
            <div className="add-order">
                <a className='img' href="/orderdetails"> <img src={logo} alt='Logo' width="130px"></img></a>
                <h2>Order Place</h2>
                <form onSubmit={handleSubmit}>
                    <label>Order Items:</label>
                    <select id="type" name="type" onChange={handleOnChange}>
                        <option value="">Select an item</option>
                        <option value="Item 1">Pizza Pepperoni</option>
                        <option value="Item 2">Meatball</option>
                        <option value="Item 3">Hamburger</option>
                        <option value="Item 4">Fried Potatoes</option>
                        <option value="Item 5">Chicken Soup</option>
                        <option value="Item 6">Vegetables Pizza</option>

                    </select><br></br>
                    <label>Quantity:</label>
<select id="quantity" name="quantity" onChange={handleOnChange}>
    <option value="">Select a quantity</option>
    {Array.from({ length: 10 }, (_, index) => (
        <option key={index + 1} value={index + 1}>{index + 1}</option>
    ))}
</select><br></br>

                    <label>Sub Items :</label>
                    <select id="subItems" name="subItems" onChange={handleOnChange}>
                    <option value="">Select an subItems</option>
                        <option value="Item 1">Mojhitos</option>
                        <option value="Item 2">Chicken Kuruma</option>
                        <option value="Item 3">Coca cola</option>
                        <option value="Item 4">Pepsi</option>
                        <option value="Item 5">Fried rice</option>
                        <option value="Item 6">Lime Juice</option>

                    </select><br></br>
                    <label>Sub Quantity:</label>
<select id="subQuantity" name="subQuantity" onChange={handleOnChange}>
    <option value="">Select a subQuantity</option>
    {Array.from({ length: 10 }, (_, index) => (
        <option key={index + 1} value={index + 1}>{index + 1}</option>
    ))}
</select><br></br>
                    <label>Date</label>
                    <input type="date" id="date" name="date" onChange={handleOnChange} /><br></br>
                    <button onClick={() => setIsClicked(true)}>Add to cart</button>
                </form><br></br>
            </div>
        </div>
    );
}

export default AddOrder;
