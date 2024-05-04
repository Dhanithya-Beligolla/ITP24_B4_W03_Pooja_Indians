import React, { useEffect, useState } from 'react';
import axios from "axios";
import './roomdetails.css';
import Search from './Search';
import moment from "moment"


function RoomsDetails() {
    const [showrooms, setShowrooms] = useState([]);

    const [searchbtn, setSearchBtn]=useState('');


    //Search Button
    const generateSearch = (e)=>{
        filterdata(searchbtn)
    }

    const filterdata = (searchKey) => {
        const filteredData = showrooms.filter(rooms =>
            rooms && rooms.name && rooms.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        setShowrooms(filteredData);
    }
    



    // Function to fetch data
    const getFetchData = async () => {
        try {
            const data = await axios.get("http://localhost:8030/api");
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
        try {
            const data = await axios.delete(`http://localhost:8030/delete/${id}`);
            if (data.data.success) {
                getFetchData();
                alert("Reservation item deleted successfully!");
            }
        } catch (err) {
            alert(err);
        }
    };



    return (
        <div className="showrooms">
            
            <h2>Reservation Details</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '1.5rem' }} className="container">
            <input
              style={{ borderRadius: '10rem 0 0 10rem', border: 'none', height: '3rem', width: '20rem', backgroundColor: '#c7bebe86', padding: '1.2rem', fontSize: '1rem', fontWeight: '500', outline: 'none' }}
              className="srchinput"
              type="search"
              onChange={(e)=>setSearchBtn(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            
          
            <button onClick={(e)=>generateSearch(e)} style={{ color: 'grey', height: '3rem', width: '5rem', fontSize: '1rem', borderRadius: '0 10rem 10rem 0', border: 'none', backgroundColor: '#e72929', color: 'white', opacity: '0.8', outline: 'none' }} className="srchbtn" type="submit">
              Search
              
            </button>
            </div>
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
                    {showrooms.map(room => (
                        <tr key={room._id}>
                            <td>{room.name}</td>
                            <td>{room.phone}</td>
                            <td>{room.email}</td>
                            <td>{moment(room.date).format("l")}</td>
                            <td>{room.quantity_rooms}</td>
                            <td>{room.quantity_people}</td>
                            <td>
                                <a href={`/roomsupdate/${room._id}`}>Edit Details</a>
                                <button onClick={() => handleDelete(room._id)}>Delete Item</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RoomsDetails;
