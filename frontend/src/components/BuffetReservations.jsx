import React, {useState} from "react";
import { FiSearch } from 'react-icons/fi';
import BuffetReservation from "./BuffetReservation";
import { useNavigate } from "react-router-dom";
import {useQuery} from "react-query"
import {getAllBuffetReservations} from "../fetchBuffetReservation/FetchBuffetReservation";

const BuffetReservations = () => {

    // create some dummy data
    const data1 = [
        {
            fristname: "Dana ",
            lastname: "Beli ",
            mobile: 7671,
            email: "dbel@gmail.com ",
            buffetType:"dinner ",
            date: "2024-04-06",
            quantity: 8,
            price: 300
        },
        {
            fristname: "thevi ",
            lastname: "sathnara ",
            mobile: 1234,
            email: "thevin@gmail.com ",
            buffetType:"dinner ",
            date: "2024-04-08",
            quantity: 10,
            price: 200
        },
        {
            fristname: "nike ",
            lastname: "hapu ",
            mobile: 456,
            email: "nhpu@gmail.com ",
            buffetType:"lunch ",
            date: "2024-04-10",
            quantity: 2,
            price: 260
        },
    ];
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchInput, setSearchInput] = useState('');

    const {data, isLoading, isError} = useQuery("buffet", getAllBuffetReservations);
    

    const navigate = useNavigate();

    return (
        <div className="w-[100%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg relative">
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">Buffet Reservations</h1>

            <div className="flex items-center w-[25%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg relative">
            <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    className="mr-2" // Add some margin to the right of the input
                    style={{ flex: "1" }}
                />
                <button onClick={() => setSearchTerm(searchInput)} style={{ backgroundColor: "lightblue", flex: "1",height:"100%" }}>
                Search
                </button>
            </div>

        <div className="text-right mr-10">
            <button
                onClick={() => navigate("/make-reservation")}
                className="button text-sm px-4">
                Make Reservation
            </button>
      </div>

            {/* map through our data */}
            <div className="p-4 lg:p-7 flex item-center flex-wrap gap-5 w-[95%] mx-auto">
                {isLoading && <p>Loading data...</p>}
                {isError && <p>Something went wrong!!!</p>}
                {data && data.length === 0 ? (
                <p> No Reservations are available !</p>
                ) : (
                data && data
                    .filter((reservation) =>
                        reservation.fristname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reservation.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reservation.buffetType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reservation.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        reservation.quantity.toString().includes(searchTerm) ||
                        reservation.price.toString().includes(searchTerm)
                    )
                    .map((filteredReservation, i) => <BuffetReservation buffetreservation={filteredReservation} key={i}/>)
                )}
            </div>

        </div>
    );
};

export default BuffetReservations;