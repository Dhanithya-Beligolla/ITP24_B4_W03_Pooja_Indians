import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { makeBuffetReservation, updateBuffetReservation } from "../../fetchBuffetReservation/FetchBuffetReservation";
import { BuffetContextShare } from "../../context/Context";
import backgroundImage from '../../assets/bgimage.jpg';

const MakeReservation = () => {
    const navigate = useNavigate();
    const { setUpdate, update } = BuffetContextShare();

    const buffetTypes = ['Breakfast', 'Lunch', 'Hightea', 'Dinner']; // Buffet types

    const [buffetReservation, setBuffetReservation] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        buffetType: "",
        date: "",
        quantity: "",
        price: "",
    });

    useEffect(() => {
        if (update) {
            setBuffetReservation({
                ...buffetReservation,
                firstname: update.firstname,
                lastname: update.lastname,
                mobile: update.mobile,
                email: update.email,
                buffetType: update.buffetType,
                date: update.date.split("T")[0],
                quantity: update.quantity,
                price: update.price,
                _id: update._id,
            });
        }
    }, [update, buffetReservation]);

    const queryClient = useQueryClient();
    const { mutate, isLoading, isError } = useMutation(makeBuffetReservation, {
        onSuccess: () => {
            alert("Successfully Added");
            queryClient.invalidateQueries("buffet");
        },
    });

    const { mutate: updateBuffetReservations, isLoading: updateLoading, isError: updateError } = useMutation(updateBuffetReservation, {
        onSuccess: () => {
            alert("Successfully Updated");
            queryClient.invalidateQueries("buffet");
        },
    });

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0); // Default price for Buffets
    const [buffetType, setBuffetType] = useState("");

    const buffetPrices = {
        Breakfast: 100,
        Lunch: 200,
        Dinner: 300,
        Hightea: 150
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (update) {
            updateBuffetReservations(buffetReservation);
            navigate("/");
        } else {
            mutate(buffetReservation);
            navigate("/buffet-page");
            alert("Successfully Added");
        }
    };

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split('T')[0];

    return (
        <div style={{ position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(8px)',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                zIndex: -1
            }}></div>
            <section>
                <button onClick={() => navigate(-1)} className="absolute top-[2rem] left-[4rem] button px-5 ext-sm">
                    Go Back
                </button>

                <div className="flex items-center justify-center h-screen">
                    <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff' }} className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:-0">

                        <h1 className="text-center text-xl font-medium">{update ? "Update Reservation" : "Reservation Form"}</h1>

                        <input value={buffetReservation.firstname} onChange={(e) => setBuffetReservation({ ...buffetReservation, firstname: e.target.value })} className="input" type="text" placeholder="First Name" pattern="[A-Za-z\s]{1,15}" title="First name should contain letters and spaces up to 15 characters" required />
                        <input value={buffetReservation.lastname} onChange={(e) => setBuffetReservation({ ...buffetReservation, lastname: e.target.value })} className="input" type="text" placeholder="Last Name" pattern="[A-Za-z\s]{1,15}" title="Last name should contain letters and spaces up to 15 characters" required />
                        <input value={buffetReservation.mobile} onChange={(e) => setBuffetReservation({ ...buffetReservation, mobile: e.target.value })} className="input" type="tel" placeholder="Mobile" pattern="0[0-9]{9}" title="Phone number should start with 0 and contain 10 digits" required />
                        <input value={buffetReservation.email} onChange={(e) => setBuffetReservation({ ...buffetReservation, email: e.target.value })} className="input" type="email" placeholder="Email" pattern=".+@gmail\.com" title="Email should be a Gmail address (example@gmail.com)" required />

                        <div>
                            <p>Buffet Type</p>
                            <select className="input" onChange={(e) => {
                                const newBuffetType = e.target.value;
                                setBuffetType(newBuffetType);
                                const newPrice = quantity * buffetPrices[newBuffetType];
                                setPrice(newPrice);
                                setBuffetReservation({ ...buffetReservation, buffetType: newBuffetType, price: newPrice });
                            }} required>
                                <option value="">Choose one</option>
                                {buffetTypes.map((type, index) => (
                                    <option key={index} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>Date</p>
                            <input value={buffetReservation.date} onChange={(e) => setBuffetReservation({ ...buffetReservation, date: e.target.value })} className="input" type="date" min={minDate} required />
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input className="input" type="number" placeholder="Quantity" min="1" value={quantity} onChange={(e) => {
                                const newQuantity = parseInt(e.target.value, 10);
                                setQuantity(newQuantity);
                                const newPrice = newQuantity * buffetPrices[buffetType];
                                setPrice(newPrice);
                                setBuffetReservation({ ...buffetReservation, quantity: newQuantity, price: newPrice });
                            }} required />
                        </div>
                        <p className="input">Total Amount = {price}</p>

                        <button type="submit" className="button">{update ? "Update" : "Submit"}</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MakeReservation;