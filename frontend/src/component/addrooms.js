import { useState } from "react";
import axios from "axios";
import './addrooms.css'

function AddRooms() {
    const [rooms, setrooms] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        quentity_rooms: "",
        quentity_people: "",

    })

    const handleonchange = (e) => {
        const { value, name } = e.target
        setrooms((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })


    }

    const handlesubmit = async (e) => {

        e.preventDefault()
        const data = await axios.post("http://localhost:8030/create", rooms)
        console.log(data)
        alert("rooms reserve successfully!")


    }

    return (
        <div className="add-rooms">
            <h2> Booking Reservation Form</h2>
            <form onSubmit={handlesubmit}>
                <lable>Name:</lable>
                <input type="text" id="name" name="name" onChange={handleonchange} /><br></br>
                <lable>Phone Number:</lable>
                <input type="text" id="phone" name="phone" onChange={handleonchange} /><br></br>
                <lable>Email:</lable>
                <input type="text" id="email" name="email" onChange={handleonchange} /><br></br>
                <lable>Date:</lable>
                <input type="date" id="date" name="date" onChange={handleonchange} /><br></br>
                <lable>Quentity:</lable>
                <input type="text" id="quentity_rooms" name="quentity_rooms" onChange={handleonchange} /><br></br>
                <lable>Number of Guests:</lable>
                <input type="text" id="quentity_people" name="quentity_people" onChange={handleonchange} /><br></br>




                <button>Reserve Rooms</button>

            </form><br></br>

        </div>
    )
}
export default AddRooms;