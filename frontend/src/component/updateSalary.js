import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./updateSalary.css";

function UpdateSalary() {
    const { id } = useParams();

    const [salarydata,setsalarydata]=useState({
        fname:"",
        basicSalary:"",
        allowance:"",
        ot:"",
        bonus:"",
        deductionTax:"",
        deductionOther:"",
        other:"",
    })

    useEffect(() => {
        const fetchSalaryData = async () => {
            try {
                const response = await fetch(`http://localhost:8040/salary/${id}`);
                const data = await response.json();
                console.log(data);

                if (data.success) {
                    setsalarydata(data.data);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Error fetching salary data:', error);
            }
        };

        fetchSalaryData();
    }, []);

    const handleInputChange = (e) => {
        setsalarydata({
            ...salarydata,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:8040/update/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: salarydata._id,
                    ...salarydata,
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Salary data updated successfully');
                alert('Salary Data updated successfully');
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error updating salary data:', error);
        }
    };

    return (
        <div className='form-container'>
        <div className='update-container'>



         
            <h2>Update Salary Data</h2>
            <br></br>
            <label for="bonus" className="form-label1">
              Name :
            </label>
            <br></br>
            <input
              type="text"              
              id="fname"
              name="fname"
              placeholder="Enter the Bonus Added"
              onChange={handleInputChange}
              value={salarydata.fname}

            />
          
            <label for="basicSalary" className="form-label1">
              Basic Salary : 
            </label>
            <br></br>
            <input
              type="text"
              id="basicSalary"
              name="basicSalary"
              placeholder="Enter basic salary "
              onChange={handleInputChange}
              value={salarydata.basicSalary}
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
              onChange={handleInputChange}
              value={salarydata.allowance}
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
              onChange={handleInputChange}
              value={salarydata.ot}
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
              onChange={handleInputChange}
              value={salarydata.bonus}
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
              placeholder="Enter Quantity Needed"
              onChange={handleInputChange}
              value={salarydata.deductionTax}
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
              onChange={handleInputChange}
              value={salarydata.deductionOther}
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
              onChange={handleInputChange}
              value={salarydata.other}
            />

            <br/><br/><br/>
            <center><button onClick={handleUpdate} className="update-btn-primary">
                    Update
                </button></center>
          
        </div></div>
    )
}

export default UpdateSalary;
