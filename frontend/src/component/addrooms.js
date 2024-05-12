// import { useState } from "react";
// import axios from "axios";
// import './addrooms.css';
// import backgroundImage from '../../src/image/backgroundImage.jpg';

// function AddRooms() {
//     const [rooms, setRooms] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         date: "",
//         quantity_rooms: "",
//         quantity_people: "",
//     });



//     const handleOnChange = (e) => {
//         const { value, name } = e.target;
//         setRooms((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = await axios.post("http://localhost:8030/create", rooms);
//         console.log(data);
//         alert("Rooms reserved successfully!");
//     };

//     return (
//         <>
        
//         <h2 id="add-rooms1">Booking Reservation Form </h2>

//         <div className="add-rooms">
//             <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            
//             <div className="content">
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" id="name" name="name" onChange={handleOnChange} /><br />
//                     <label>Phone Number:</label>
//                     <input type="number" id="phone" name="phone" onChange={handleOnChange} /><br />
//                     <label>Email:</label>
//                     <input type="email" id="email" name="email" onChange={handleOnChange} /><br />
//                     <label>Date:</label>
//                     <input type="date" id="date" name="date" onChange={handleOnChange} /><br />
//                     <label>Quantity:</label>
//                     <input type="number" min = "1"  max = "10" id="quantity_rooms" name="quantity_rooms" onChange={handleOnChange} /><br />
//                     <label>Number of Guests:</label>
//                     <input type="number" min = "1" id="quantity_people" name="quantity_people" onChange={handleOnChange} /><br />

//                     <button>Reserve Rooms</button>
//                 </form>
//             </div>
//         </div>
//         </>
//     );
// }
// export default AddRooms;

// import React, { useState } from "react";
// import axios from "axios";
// import './addrooms.css';
// import backgroundImage from '../../src/image/backgroundImage.jpg';

// function AddRooms() {
//   const [rooms, setRooms] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     quantity_rooms: "",
//     quantity_people: ""
//   });

//   const handleOnChange = (e) => {
//     const { value, name } = e.target;
//     setRooms(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         await axios.post("http://localhost:8030/api/create", rooms);
//         alert("Rooms reserved successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while reserving rooms");
//     }
//   };

//   return (
//     <>
//       <h2 id="add-rooms1">Booking Reservation Form </h2>
//       <div className="add-rooms">
//         <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
//         <div className="content">
//           <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" id="name" name="name" onChange={handleOnChange} /><br />
//             <label>Phone Number:</label>
//             <input type="tel" id="phone" name="phone" onChange={handleOnChange} /><br />
//             <label>Email:</label>
//             <input type="email" id="email" name="email" onChange={handleOnChange} /><br />
//             <label>Date:</label>
//             <input type="date" id="date" name="date" onChange={handleOnChange} /><br />
//             <label>Quantity:</label>
//             <input type="number" min="1" max="10" id="quantity_rooms" name="quantity_rooms" onChange={handleOnChange} /><br />
//             <label>Number of Guests:</label>
//             <input type="number" min="1" id="quantity_people" name="quantity_people" onChange={handleOnChange} /><br />
//             <button>Reserve Rooms</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddRooms;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addrooms.css';
import backgroundImage from '../../src/image/backgroundImage.jpg';

function AddRooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    quantity_rooms: "",
    quantity_people: ""
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    if (name === "id") {
      // Check if the entered value is a number with exactly 4 digits
      if (!/^\d{4}$/.test(value)) {
        return;
      }
    }

    setRooms(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!rooms.id.trim()) {
      validationErrors.id = "ID is required";
    } else if (rooms.id.length !== 4) {
      validationErrors.id = "ID must be a 4-digit number";
    }

    if (!rooms.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!rooms.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(rooms.phone)) {
      validationErrors.phone = "Invalid phone number";
    }
    if (!rooms.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(rooms.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!rooms.date.trim()) {
      validationErrors.date = "Date is required";
    }
    if (!rooms.quantity_rooms.trim()) {
      validationErrors.quantity_rooms = "Quantity is required";
    }
    if (!rooms.quantity_people.trim()) {
      validationErrors.quantity_people = "Number of guests is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await axios.post("http://localhost:8030/api/create", rooms);
      alert("Rooms reserved successfully!");
      navigate('/roomsdetails');
    } catch (error) {
      console.error(error);
      alert("An error occurred while reserving rooms");
    }
  };

  return (
    <>
      <h2 id="add-rooms1">Booking Reservation Form </h2>
      <div className="add-rooms">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input type="text" id="id" name="id" onChange={handleOnChange} />
            {errors.id && <span className="error">{errors.id}</span>}<br />
            <label>Name:</label>
            <input type="text" id="name" name="name" onChange={handleOnChange} />
            {errors.name && <span className="error">{errors.name}</span>}<br />
            <label>Phone Number:</label>
            <input type="tel" id="phone" name="phone" onChange={handleOnChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}<br />
            <label>Email:</label>
            <input type="email" id="email" name="email" onChange={handleOnChange} />
            {errors.email && <span className="error">{errors.email}</span>}<br />
            <label>Date:</label>
            <input type="date" id="date" name="date" onChange={handleOnChange} />
            {errors.date && <span className="error">{errors.date}</span>}<br />
            <label>Quantity:</label>
            <input type="number" min="1" max="10" id="quantity_rooms" name="quantity_rooms" onChange={handleOnChange} />
            {errors.quantity_rooms && <span className="error">{errors.quantity_rooms}</span>}<br />
            <label>Number of Guests:</label>
            <input type="number" min="1" id="quantity_people" name="quantity_people" onChange={handleOnChange} />
            {errors.quantity_people && <span className="error">{errors.quantity_people}</span>}<br />
            <button type="submit">Reserve Rooms</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRooms;
