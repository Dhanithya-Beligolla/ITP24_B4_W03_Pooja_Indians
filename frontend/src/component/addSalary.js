import  { useState,useEffect } from 'react'
import "./addSalary.css";
import axios from 'axios'



function AddSalary(){

    const [salarydata,setsalarydata]=useState({
        fname:"",
        fid:"",
        ftitle:"",
        femail:"",
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
            <label for="bonus" className="form-label1">
              Name :
            </label>
            <br></br>
            <input
              type="text"              
              id="fname"
              name="fname"
              placeholder="Enter the Name"
              onChange={handleonchange}
            /><br/><br/>

            <label for="bonus" className="form-label1">
              ID :
            </label>
            <br></br>
            <input
              type="text"              
              id="fid"
              name="fid"
              placeholder="Enter the ID"
              onChange={handleonchange}
            /><br/><br/>

            <label for="bonus" className="form-label1">
              Job Title:
            </label>
            <br></br>
            <input
              type="text"              
              id="ftitle"
              name="ftitle"
              placeholder="Enter the Job Title"
              onChange={handleonchange}
            /><br/><br/>

            <label for="bonus" className="form-label1">
              E-Mail:
            </label>
            <br></br>
            <input
              type="email"              
              id="femail"
              name="femail"
              placeholder="Enter the E-Mail"
              onChange={handleonchange}
            /><br/><br/>




       
            <label for="basicSalary" className="form-label1">
              Basic Salary : 
            </label>
            <br></br>
            <input
              type="number"
              id="basicSalary"
              name="basicSalary"
              placeholder="Enter Basic Salary "
              onChange={handleonchange}
            /><br/><br/>
      
      <h3>Allowances</h3>
      <br></br> <br></br>


      <label for="allowance" className="form-label1">
              Allowance :
            </label>
            <br></br>
            <input
              type="number"              
              id="allowance"
              name="allowance"
              placeholder="Enter the Allowance"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="ot" className="form-label1">
              OT Hours :
            </label>
            <br></br>
            <input
              type="number"              
              id="ot"
              name="ot"
              placeholder="Enter OT Hours"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="bonus" className="form-label1">
              Bonus Amount :
            </label>
            <br></br>
            <input
              type="number"              
              id="bonus"
              name="bonus"
              placeholder="Enter the Bonus Added"
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
              type="number"              
              id="deductionTax"
              name="deductionTax"
              placeholder="Enter the Taxes"
              onChange={handleonchange}
            />
            <br/><br/>


            <label for="deductionOther" className="form-label1">
              Other Deductions :
            </label>
            <br></br>
            <input
              type="number"              
              id="deductionOther"
              name="deductionOther"
              placeholder="Enter Other Deductions"
              onChange={handleonchange}
            />
            <br/><br/><br></br>


<label for="other" className="form-label1">
              Other Compensations :
            </label>
            <br></br>
            <input
              type="number"
              id="other"
              name="other"
              placeholder="Enter Other Compensations"
              onChange={handleonchange}
            />

            <br/><br/><br/>
            <center><button className='sumitbtn'>Submit</button></center>
          </form>
        </div>
    )
}
export default AddSalary;