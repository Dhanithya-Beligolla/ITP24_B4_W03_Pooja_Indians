import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addBuffet, updateBuffet } from '../../fetchBuffet/fetchBuffet';
import { BuffetContextShare } from "../../context/Context";

const Addbuffet = () => {
  const navigate = useNavigate();
  const {setUpdate, update} = BuffetContextShare();

  console.log(update);

  const buffetTypes = ['Breakfast', 'Lunch', 'High Tea', 'Dinner']; // Buffet types

  const [buffet, setBuffet] = useState({
    buffetID: "",
    buffetType: "",
    buffetDescription: "",
    buffetPrice: "",
    image: "",
    specialOffers:"",
  }); // Default value is an empty array

  useEffect(() => {
    if(update){
      setBuffet({
        ...buffet,
        buffetType: update.buffetType,
        buffetDescription: update.buffetDescription,
        buffetPrice: update.buffetPrice,
        image: update.image,
        specialOffers: update.specialOffers,
        _id: update._id,
      });
    }
  }
  ,[]);


  // Add buffet
  const queryClient = useQueryClient();
  const {mutate , isLoading, isError} = useMutation(addBuffet,{
    onSuccess: () => queryClient.invalidateQueries("buffetadmin"), 
  });

  // Add buffet
  const {mutate:updateBuffets , isLoading:updateLoading, isError:updateErroe} = useMutation(updateBuffet,{
    onSuccess: () => queryClient.invalidateQueries("buffetadmin"), 
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(update){
      updateBuffets(buffet);
      navigate("/buffet-admin");
      alert("Successfully Updated");
    }else{
      mutate(buffet);
      navigate("/buffet-admin");
      alert("Successfully Added");
    }

    
  }

  return (
    <section>
      <button onClick={() => navigate(-1)} className="absolute top-[2rem] left-[4rem] button px-5 ext-sm">
                Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:-0">
          <h1 className="text-center text-xl font-medium">{update ? "Update Buffet" : "Add Buffets"}</h1>

          <input value={buffet.buffetID} onChange={(e) => setBuffet({...buffet,buffetID:e.target.value})} className="input" type="text" maxLength="4" placeholder="Buffet ID" />
          <select 
            value={buffet.buffetType} 
            onChange={(e) => setBuffet({...buffet, buffetType: e.target.value})}
            className="input"
            required
          >
            <option value="">Select Buffet Type</option>
            {buffetTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input value={buffet.buffetDescription} onChange={(e) => setBuffet({...buffet,buffetDescription:e.target.value})} className="input"  type="text" placeholder="Buffet Description" />
          <input min="1" value={buffet.buffetPrice} onChange={(e) => setBuffet({...buffet,buffetPrice:e.target.value})} className="input"  type="number" placeholder="Buffet Price" required/>
          <input value={buffet.specialOffers} onChange={(e) => setBuffet({...buffet,specialOffers:e.target.value})} className="input"  type="text" placeholder="Special Offers" />
          <input onChange={(e) => setBuffet({...buffet,image:e.target.files[0]})} className="input"  type="file" required/>
          <button type="submit" className="button">{update ? "Update" : "Add"}</button>

        </form>

      </div>
    </section>
  )
}

export default Addbuffet;