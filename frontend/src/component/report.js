import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './report.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Reportdetails() {
  const [countlist, setCountlist] = useState([]);
  const [customerlist, setCustomerlist] = useState([]);

  // Fetch data from the backend API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8030/api/count_rooms");
      const { count, data } = response.data;
      setCountlist(count);
      setCustomerlist(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'jpeg', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Room Details.pdf');
    });
  };

  return (
    <div className='report-rooms' ref={pdfRef}>
      <h3>Total Rooms in Customers needed </h3>
      <p>Total Rooms: {countlist}</p>

      <h3> Rooms Details :</h3>

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Number of Rooms</th>
            <th>Number of People</th>
          </tr>
        </thead>
        <tbody>
          {customerlist.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.quantity_rooms}</td>
              <td>{customer.quantity_people}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='row text-center mt-5'>
        <button className="btn btn-primary" onClick={downloadPDF} style={{ marginLeft: '-20px' }}>Download PDF</button>
      </div>
    </div>
  );
}

export default Reportdetails;