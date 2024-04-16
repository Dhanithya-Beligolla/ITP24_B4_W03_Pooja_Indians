import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { addBuffet } from '../../fetchBuffet/fetchBuffet';

const Addbuffet = () => {
  const navigate = useNavigate();

  const [buffet, setBuffet] = useState({
    buffetType: "",
    buffetDescription: "",
    buffetPrice: "",
    image: "",
  }); // Default value is an empty array

  const {mutate , isLoading, isError} = useMutation(addBuffet,{
    onSuccess : (data) => console.log(data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ buffet });
    console.log(buffet);
    navigate("/buffet-pages");
    
  }



  return (
    <section>
      <button onClick={() => navigate(-1)} className="absolute top-[2rem] left-[4rem] button px-5 ext-sm">
                Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:-0">
          <h1 className="text-center text-xl font-medium">Add Buffets</h1>
          <input value={buffet.buffetType} onChange={(e) => setBuffet({...buffet,buffetType:e.target.value})} className="input"  type="text" placeholder="Buffet Type" />
          <input value={buffet.buffetDescription} onChange={(e) => setBuffet({...buffet,buffetDescription:e.target.value})} className="input"  type="text" placeholder="Buffet Description" />
          <input value={buffet.buffetPrice} onChange={(e) => setBuffet({...buffet,buffetPrice:e.target.value})} className="input"  type="number" placeholder="Buffet Price" />
          <input onChange={(e) => setBuffet({...buffet,image:e.target.files[0]})} className="input"  type="file"/>
          <button type="submit" className="button">Add Buffet</button>

        </form>

      </div>
    </section>
  )
}

export default Addbuffet;