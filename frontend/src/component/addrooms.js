import { useState } from "react";
import axios from "axios";
import './addrooms.css';
import backgroundImage from '../../src/image/backgroundImage.jpg';

function AddRooms() {
    const [rooms, setRooms] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        quantity_rooms: "",
        quantity_people: "",
    });


    const [errorMessage, setErrorMessage] = useState("");

    const validateSchema = Yup.object().shape({
    name: Yup.string().required('First Name is Required').matches(/^[A-Za-z\s]+$/, 'Name must contain only letters'), 
    phone: Yup.string().matches(/^0\d{9}$/, 'Invalid Contact Number').required('Contact number is Required'),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Invalid Gmail address').required('Email is Required'),
    date: Yup.string().required('Date is Required'),
    

  });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setRooms((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("http://localhost:8030/create", rooms);
        console.log(data);
        alert("Rooms reserved successfully!");
    };

    return (
        <>
        <h2>Booking Reservation Form</h2>
        <div className="add-rooms">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id="name" name="name" onChange={handleOnChange} /><br />
                    <label>Phone Number:</label>
                    <input type="number" id="phone" name="phone" onChange={handleOnChange} /><br />
                    <label>Email:</label>
                    <input type="email" id="email" name="email" onChange={handleOnChange} /><br />
                    <label>Date:</label>
                    <input type="date" id="date" name="date" onChange={handleOnChange} /><br />
                    <label>Quantity:</label>
                    <input type="number" id="quantity_rooms" name="quantity_rooms" onChange={handleOnChange} /><br />
                    <label>Number of Guests:</label>
                    <input type="number" id="quantity_people" name="quantity_people" onChange={handleOnChange} /><br />

                    <button>Reserve Rooms</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default AddRooms;
