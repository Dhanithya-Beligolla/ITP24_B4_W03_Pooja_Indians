import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { makeBuffetReservation, updateBuffetReservation } from "../../fetchBuffetReservation/FetchBuffetReservation";
import { BuffetContextShare } from "../../context/Context";
import backgroundImage from '../../assets/bgimage.jpg';// replace with the actual path to your image


const MakeReservation = () => {

    const navigate = useNavigate();
    const {setUpdate, update} = BuffetContextShare();

    console.log(update);

    const buffetTypes = ['Breakfast', 'Lunch', 'Hightea', 'Dinner']; // Buffet types
    

    const [buffetReservation, setBuffetReservation] = useState({
        fristname: "",
        lastname: "",
        mobile: "",
        email: "",
        buffetType: "",
        date: "",
        quantity: "",
        price: "",
    }); // Default value is an empty array 

    useEffect(() => {
        if(update){
            setBuffetReservation({
                ...buffetReservation,
                fristname: update.fristname,
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
    }, []);

    //make new reservation
    const queryClient = useQueryClient();
    const {mutate , isLoading, isError} = useMutation(makeBuffetReservation,{
        onSuccess : () => {
            alert("Successfully Added");
        queryClient.invalidateQueries("buffet")},
    });

    //update reservation

    const {mutate:updateBuffetReservations , isLoading:updateLoading, isError:updateError} = useMutation(updateBuffetReservation,{
        onSuccess : () => {
            alert("Successfully Updated");
            queryClient.invalidateQueries("buffet")},
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
        // Generate reservationID
        //const reservationID = String(counter++).padStart(4, '0');
        // Include reservationID in the data sent to the server
        //console.log(buffetReservation);
        if(update){
            updateBuffetReservations(buffetReservation);
            navigate("/");
        }
        else{
            mutate(buffetReservation);
            navigate("/");
        }

    };

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
        <section >
            <button onClick={() => navigate(-1)} className="absolute top-[2rem] left-[4rem] button px-5 ext-sm">
                Go Back
            </button>

            <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff' }} className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:-0">

                    <h1 className="text-center text-xl font-medium">{update ? "Update Reservation" : "Reservation Form"}</h1>

                    <input value={buffetReservation.fristname} onChange={(e) => setBuffetReservation({...buffetReservation,fristname:e.target.value})} className="input" type="text" placeholder="First Name" />
                    <input value={buffetReservation.lastname} onChange={(e) => setBuffetReservation({...buffetReservation,lastname:e.target.value})} className="input" type="text" placeholder="Last Name" />
                    <input value={buffetReservation.mobile} onChange={(e) => setBuffetReservation({...buffetReservation,mobile:e.target.value})} className="input" type="number" placeholder="Mobile" />
                    <input value={buffetReservation.email} onChange={(e) => setBuffetReservation({...buffetReservation,email:e.target.value})} className="input" type="email" placeholder="Email" />

                    <div>
                        <p>Buffet Type</p>
                        <select  className="input" type="text" onChange={(e) => {
                            const newBuffetType = e.target.value;
                            setBuffetType(newBuffetType);
                            const newPrice = quantity * buffetPrices[newBuffetType];
                            setPrice(newPrice);
                            setBuffetReservation({...buffetReservation, buffetType: newBuffetType, price: newPrice});
                        }}>
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
                        <input value={buffetReservation.date} onChange={(e) => setBuffetReservation({...buffetReservation,date:e.target.value})}  className="input" type="date" />
                    </div>
                    <div>
                        <p>Quantity</p>
                        <input className="input" type="number" placeholder="Quantity" value={quantity} onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            setQuantity(newQuantity);
                            const newPrice = newQuantity * buffetPrices[buffetType];
                            setPrice(newPrice);
                            setBuffetReservation({...buffetReservation, quantity: newQuantity, price: newPrice});
                        }} />
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
