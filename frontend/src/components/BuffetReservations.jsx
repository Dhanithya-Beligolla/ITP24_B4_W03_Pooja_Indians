import React from "react";
import BuffetReservation from "./BuffetReservation";

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
    return (
        <div className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
        rounded-lg relative">
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">Buffet Reservations</h1>

        <div className="text-right mr-10">
            <button
                onClick={() => navigate("#")}
                className="button text-sm px-4">
                Make Reservation
            </button>
      </div>

            {/* map through our data */}
            <div className="p-4 lg:p-7 flex item-center flex-wrap gap-5 w-[95%] mx-auto">
                {data1.map((buffetreservation, i) => (
                    <BuffetReservation reservation={buffetreservation} key={i}/>
                ))}
            </div>

        </div>
    );
};

export default BuffetReservations;
