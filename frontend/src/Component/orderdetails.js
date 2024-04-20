import  { useEffect, useState , useRef} from 'react'
import axios from "axios"
import './orderdetails.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function OrderDetails(){
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchbtn, setSearchBtn]=useState('');

        //Search Button
        const generateSearch = (e)=>{
            filterdata(searchbtn)
        }
    
        const filterdata = (searchKey) => {
            const filteredData = showdiscounts.filter(orders =>
                orders && orders.type && orders.type.toLowerCase().includes(searchKey.toLowerCase())
            );
            setshowdiscounts(filteredData);
        }

        
//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8020/")
    console.log(data.data.success)
    if(data.data.success){
        setshowdiscounts(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:8020/delete/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
    }
}

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
          pdf.save('Order Details.pdf');
    
        })
      };


    return(
        <div className="showorders" ref={pdfRef}>
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
              
              <tr>
              <th>Order Items</th>
              <th>Order Sub Type</th>
              <th>Order Quentity</th>
              <th>Date</th>
              <th>Action</th>
             
              
              </tr>


              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.type}</td> 
                            <td> {e1.extra}</td> 
                            <td> {e1.quentity}</td> 
                            <td> {e1.date}</td> 
                         
                           
                            <td>
                              <a href={`/updateorder/${e1._id}`}>Edit Order</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Order</button>
                              <a href="pay">Pay Now</a>
                            </td>
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
export default OrderDetails;