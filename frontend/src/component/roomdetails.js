import React, { useEffect, useState } from 'react';
import axios from "axios";
import './roomdetails.css';
import Search from './Search';

function RoomsDetails() {
    const [showrooms, setShowrooms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to fetch data
    const getFetchData = async () => {
        try {
            const data = await axios.get("http://localhost:8030/");
            if (data.data.success) {
                setShowrooms(data.data.data);
            }
        } catch (err) {
            alert(err);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        getFetchData();
    }, []);

    // Function to delete item
    const handleDelete = async (id) => {
        const data = await axios.delete('http://localhost:8030/delete/${id}');
        if (data.data.success) {
            getFetchData();
            alert("Reservation item deleted successfully!");
        }
    };

    // Function to handle search
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtered rooms based on search query
    const filteredRooms = showrooms.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="showrooms">
            <Search handleSearch={handleSearch} />
            <h2>Reservation Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Reservation Date</th>
                        <th>Number of Rooms</th>
                        <th>Number of People</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRooms.map(room => (
                        <tr key={room._id}>
                            <td>{room.name}</td>
                            <td>{room.phone}</td>
                            <td>{room.email}</td>
                            <td>{room.date}</td>
                            <td>{room.quentity_rooms}</td>
                            <td>{room.quentity_people}</td>
                            <td>
                                <a href={'/roomsupdate/${room._id}'}>Edit Details</a>
                                <button onClick={() => handleDelete(room._id)}>Delete Item</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RoomsDetails;