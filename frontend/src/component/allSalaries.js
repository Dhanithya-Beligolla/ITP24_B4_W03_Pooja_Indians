import {useState,useEffect } from 'react'
import axios  from 'axios'
import "./allSalaryStyle.css";


function AllSalaries(){
const [salarylist,setsalarylist]=useState([]);

const [searchbtn, setSearchBtn]=useState('');

//read
const getfetchdetails=async()=>{
    try{
        const data=await axios.get("http://localhost:8040/")
        console.log(data.data.success)
        if(data.data.success){
            setsalarylist(data.data.data)
        }
    }catch(err){
        console.log(err)
    }
}
useEffect(()=>{
getfetchdetails()
},[])

//delete
const handledelete=async(id)=>{
    const data=await axios.delete("http://localhost:8040/delete/"+id)
    if(data.data.success){
        getfetchdetails()
        console.log(data.data.message)
        alert("deleted successfully")
    }
}

//Search Button
const generateSearch = (e)=>{
    filterdata(searchbtn)
}

const filterdata = (searchKey) => {
    const filteredData = salarylist.filter(customer =>
        customer && customer.basicSalary && customer.basicSalary.toLowerCase().includes(searchKey.toLowerCase())
    );
    setsalarylist(filteredData);
}

// Calculate net salary
const calculateNetSalary = (e1) => {
    const netSalary = (
        parseFloat(e1.basicSalary) +
        parseFloat(e1.allowance) +
        parseFloat(e1.ot) * 1000 +
        parseFloat(e1.bonus) +
        parseFloat(e1.other) -
        parseFloat(e1.deductionTax) -
        parseFloat(e1.deductionOther)
    ).toFixed(2);
    return netSalary;
};


    return(
<div>
        <div className="container">
            <input
              className="srchinput"
              type="search"
              onChange={(e)=>setSearchBtn(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            
          
            <button onClick={(e)=>generateSearch(e)} className="srchbtn" type="submit">
              Search
              
            </button>
            </div>

<table>
              
                        <tr>
                        <th>Basic Salary</th>
                        <th>Allowance</th>
                        <th>OT Hours</th>
                        <th>Bonus</th>
                        <th>Tax Deduction</th>
                        <th>Other Deductions</th>
                        <th>Other Compensations</th>
                        <th>Net Salary</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>


                        <tbody>
                            { 
                               salarylist.map((e1)=>{
                                return(
                                    <tr> 
                                      <td> {e1.basicSalary}</td> 
                                      <td> {e1.allowance}</td> 
                                      <td> {e1.ot}</td> 
                                      <td> {e1.bonus}</td>
                                      <td> {e1.deductionTax}</td>
                                      <td> {e1.deductionOther}</td>
                                      <td> {e1.other}</td>
                                      <td>
                                        {calculateNetSalary(e1)}
                                      </td>
                                      <td>
                                        <a href={`/update/${e1._id}`} className='btn1'>Update</a>
                                     </td>
                                     <td>
                                        <button onClick={()=>handledelete(e1._id)}>Delete</button>
                                      </td>
                                    </tr>
                                )

                        })
                            }
                        </tbody>
            </table>
</div>
    )
}
export default AllSalaries