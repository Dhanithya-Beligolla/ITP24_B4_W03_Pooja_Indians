import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function UpdateComplain() {
    const [inputs,setInputs]=useState({});
    const history=useNavigate();
    const id=useParams().id;

    useEffect(()=>{
        const fetchHandler= async ()=>{
            try {
                const res = await axios.get(`http://localhost:3000/complains/${id}`);
                console.log(res.data);  // Log the fetched data
                if (res.data) {
                    setInputs(res.data);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchHandler();
    },[id]);

    const sendRequest=async()=>{
        await axios
        .put(`http://localhost:3000/complains/${id}`,{
            name:String(inputs.name),
            email:String(inputs.email),
            subject:String(inputs.subject),
            message:String(inputs.message),
        })
        .then((res) => res.data);   
    }

    const handleSubmit=async (e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/complaindetails"));
    };

  return (
    <div>
        <h1>Update complain</h1>

        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={inputs.name} onChange={e => setInputs({...inputs, name: e.target.value})} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={inputs.email} onChange={e => setInputs({...inputs, email: e.target.value})} />
      </label>
      <label>
        Subject:
        <input type="text" name="subject" value={inputs.subject} onChange={e => setInputs({...inputs, subject: e.target.value})} />
      </label>
      <label>
        Message:
        <textarea name="message" value={inputs.message} onChange={e => setInputs({...inputs, message: e.target.value})} />
      </label>
      <input type="submit" value="Submit" />
    </form>


    </div>

  )
}

export default UpdateComplain