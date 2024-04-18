import  { useState,useEffect } from 'react'
import "./addSalary.css";
import axios from 'axios'


function AddSalary(){

    const [salarydata,setsalarydata]=useState({
        basicSalary:"",
        allowance:"",
        ot:"",
        bonus:"",
        deductionTax:"",
        deductionOther:"",
        other:"",
    })
   



    //add
    const handleonchange=(e)=>{
        const{value,name}=e.target
        setsalarydata((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()
        const data=await axios.post("http://localhost:8040/create",salarydata)
        console.log(data)
        alert("data addded successfully!");
    }
    return(
        
        <div className="container-form">



<form className='salary-form' onSubmit={handlesubmit}>
         
            <center><h2>Pay Sheet Form</h2></center>
          
            <br></br>
       
            <label for="basicSalary" className="form-label1">
              Basic Salary : 
            </label>
            <br></br>
            <input
              type="text"
              id="basicSalary"
              name="basicSalary"
              placeholder="Enter basic salary "
              onChange={handleonchange}
            /><br/><br/>
      
      <h3>Allowances</h3>
      <br></br> <br></br>


      <label for="allowance" className="form-label1">
              Allowance :
            </label>
            <br></br>
            <input
              type="text"              
              id="allowance"
              name="allowance"
              placeholder="Enter the allowance"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="ot" className="form-label1">
              OT Hours :
            </label>
            <br></br>
            <input
              type="text"              
              id="ot"
              name="ot"
              placeholder="Enter OT hours"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="bonus" className="form-label1">
              Bonus Amount :
            </label>
            <br></br>
            <input
              type="text"              
              id="bonus"
              name="bonus"
              placeholder="Enter the bonus added"
              onChange={handleonchange}
            />
            <br/><br/>

            <h3>Deductions</h3>
            <br></br> <br></br>

            <label for="deductionTax" className="form-label1">
              Tax :
            </label>
            <br></br>
            <input
              type="text"              
              id="deductionTax"
              name="deductionTax"
              placeholder="Enter the taxes"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="deductionOther" className="form-label1">
              Other Deductions :
            </label>
            <br></br>
            <input
              type="text"              
              id="deductionOther"
              name="deductionOther"
              placeholder="Enter other deductions"
              onChange={handleonchange}
            />
            <br/><br/><br></br>


<label for="other" className="form-label1">
              Other Compensations :
            </label>
            <br></br>
            <input
              type="text"
              id="other"
              name="other"
              placeholder="Enter other compensations"
              onChange={handleonchange}
            />

            <br/><br/><br/>
            <center><button className='sumitbtn'>Submit</button></center>
          </form>
        </div>
    )
}
export default AddSalary;