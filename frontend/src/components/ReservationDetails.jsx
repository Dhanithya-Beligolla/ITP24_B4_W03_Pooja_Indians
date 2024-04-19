import React from "react";
import { useLocation } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReservationPDF from './ReservationPDF';
import { useState } from "react";
import moment from "moment";

const ReservationDetails = () => {
  const location = useLocation();
  const reservation = location.state.reservation;
  const [hover, setHover] = useState(false);

    return (
        <div>
            <div className={`border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg p-4 w-[100%]`}>
                <div style={{
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto',
                    border: '1px solid #000',
                    padding: '20px'
                    }} className="bill">
                    <h1>Reservation Details</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Reservation Code:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation._id}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">First Name:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.fristname}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Last Name:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.lastname}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Mobile:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.mobile}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Email:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.email}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Buffet Type:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.buffetType}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Date:</div>
                        <div style={{textAlign: 'right'}} className="bill-value"> {moment(reservation.date).format("l")}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Quantity:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.quantity}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000',
                        padding: '10px 0'
                    }} className="bill-row">
                        <div style={{fontWeight: 'bold'}} className="bill-label">Price:</div>
                        <div style={{textAlign: 'right'}} className="bill-value">{reservation.price}</div>
                    </div>
                </div>
                <div>
                <PDFDownloadLink
                document={<ReservationPDF reservation={reservation} />}
                    fileName="reservation.pdf"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        color: '#fff',
                        backgroundColor: hover ? '#0056b3' : '#007bff',
                        border: 'none',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    >
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download receipt'
                    }
                </PDFDownloadLink>
            </div>  
            </div>
         
        </div>
    );

  // ...
};

export default ReservationDetails;