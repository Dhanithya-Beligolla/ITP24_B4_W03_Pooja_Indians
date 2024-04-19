import { useEffect, useRef, useState } from 'react'
import axios from "axios"
import './report.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Reportdetails() {
    const [countlist, setcountlist] = useState([]);
    const [customerlist, setcustomerlist] = useState([]);


    //read
    const getfetchdata = async () => {
        try {
            const data = await axios.get("http://localhost:8030/count_rooms")
            const { count } = data.data;
            setcountlist(count);//get count
            setcustomerlist(data.data.data);//get table data

        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        getfetchdata()
    }, [])



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
    
        })
      };
    return (
        <div className='report-rooms' ref={pdfRef}>
            <h3>Total Rooms in Customeres needed </h3>
            {countlist !== null ? (
                <p>Total Rooms: {countlist}


                </p>

            ) : (
                <p>Loading...
                </p>


            )}

            <h3> Rooms Details :</h3>





            <table>
                <tr>
                    <th>Customer  Name</th>
                    <th>Phone Number</th>

                    <th>Number of Rooms</th>
                    <th>Number of People</th>

                </tr>
                <tbody>
                    {
                        customerlist.map((e) => {
                            return (
                                <tr>
                                    <td> {e.name}</td>
                                    <td> {e.phone}</td>

                                    <td> {e.quentity_rooms}</td>
                                    <td> {e.quentity_people}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>








            <div className='row text-center mt-5'>
    <button className="btn btn-primary" onClick={downloadPDF} style={{ marginLeft: '-20px' }}>Download PDF</button>
</div>


        </div>
    )




}
export default Reportdetails;
