import React, { useState } from 'react';
import "./addSalary.css";
import axios from 'axios';

function AddSalary() {

    const [salarydata, setsalarydata] = useState({
        fname: "",
        fid: "",
        ftitle: "",
        femail: "",
        basicSalary: "",
        allowance: "",
        ot: "",
        bonus: "",
        deductionTax: "",
        deductionOther: "",
        other: "",
    })

    // Validation regex patterns
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^\d+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    // Handle input change
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setsalarydata(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add validation checks here if needed
        const data = await axios.post("http://localhost:8040/create", salarydata);
        console.log(data);
        alert("Data added successfully!");
    }

    return (
        <div className="container-form">
            <form className='salary-form' onSubmit={handleSubmit}>
                <center><h2>Pay Sheet Form</h2></center>
                <br /><br />
                <label htmlFor="fname" className="form-label1">Name :</label><br />
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter the Name"
                    onChange={handleOnChange}
                    pattern={nameRegex.source}
                    title="Only English letters and spaces are allowed"
                    required
                /><br /><br />
                <label htmlFor="fid" className="form-label1">ID :</label><br />
                <input
                    type="text"
                    id="fid"
                    name="fid"
                    placeholder="Enter the ID"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <label htmlFor="ftitle" className="form-label1">Job Title:</label><br />
                <input
                    type="text"
                    id="ftitle"
                    name="ftitle"
                    placeholder="Enter the Job Title"
                    onChange={handleOnChange}
                    pattern={nameRegex.source}
                    title="Only English letters and spaces are allowed"
                    required
                /><br /><br />
                <label htmlFor="femail" className="form-label1">E-Mail:</label><br />
                <input
                    type="email"
                    id="femail"
                    name="femail"
                    placeholder="Enter the E-Mail"
                    onChange={handleOnChange}
                    pattern={emailRegex.source}
                    title="Please enter a valid email address ending with '@gmail.com'"
                    required
                /><br /><br />
                <label htmlFor="basicSalary" className="form-label1">Basic Salary :</label><br />
                <input
                    type="number"
                    id="basicSalary"
                    name="basicSalary"
                    placeholder="Enter Basic Salary"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <h3>Allowances</h3><br /><br />
                <label htmlFor="allowance" className="form-label1">Allowance :</label><br />
                <input
                    type="number"
                    id="allowance"
                    name="allowance"
                    placeholder="Enter the Allowance"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <label htmlFor="ot" className="form-label1">OT Hours :</label><br />
                <input
                    type="number"
                    id="ot"
                    name="ot"
                    placeholder="Enter OT Hours"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <label htmlFor="bonus" className="form-label1">Bonus Amount :</label><br />
                <input
                    type="number"
                    id="bonus"
                    name="bonus"
                    placeholder="Enter the Bonus Added"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <h3>Deductions</h3><br /><br />
                <label htmlFor="deductionTax" className="form-label1">Tax :</label><br />
                <input
                    type="number"
                    id="deductionTax"
                    name="deductionTax"
                    placeholder="Enter the Taxes"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <label htmlFor="deductionOther" className="form-label1">Other Deductions :</label><br />
                <input
                    type="number"
                    id="deductionOther"
                    name="deductionOther"
                    placeholder="Enter Other Deductions"
                    onChange={handleOnChange}
                    required
                /><br /><br />
                <br />
                <label htmlFor="other" className="form-label1">Other Compensations :</label><br />
                <input
                    type="number"
                    id="other"
                    name="other"
                    placeholder="Enter Other Compensations"
                    onChange={handleOnChange}
                    required
                /><br /><br /><br />
                <center><button className='sumitbtn'>Submit</button></center>
            </form>
        </div>
    );
}

export default AddSalary;