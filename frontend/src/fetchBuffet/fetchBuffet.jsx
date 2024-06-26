import axios from "axios";

//base url
//const baseURL = import.meta.env.VITE_BASEURL;
const baseURL = "http://localhost:5534";

//get all data from the api
export const getAllBuffets = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/buffetadmin`);
        return res.data.allBuffets;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

//add buffet
export const addBuffet = async (data) => {

    if (data.image) {
        const form = new FormData();
        const name = Date.now() + data.image.name;
        form.append("name", name);
        form.append("file", data.image);
        data.image = name;
    
        try {
          await axios.post(`${baseURL}/api/upload`, form);
        } catch (error) {
          throw Error(error);
        }
    }

    try {
        const res = await axios.post(`${baseURL}/api/buffetadmin/create`, data);
        return res.newBuffet;
        
    } catch (error) {
        // Handle server error
        console.error('Error making reservation:', error);
        throw new Error('Failed to make reservation. Please check your input and try again.');
    }
};

// delete buffet
export const deleteBuffet = async (id) => {
    try {
        await axios.delete(`${baseURL}/api/buffetadmin/delete/${id}`);
        
    } catch (error) {
        throw new Error("Failed to delete buffet. Please try again.");
        
    }
};


//update buffet
export const updateBuffet = async (buffet) => {
    try {
        await axios.put(`${baseURL}/api/buffetadmin/update/${buffet._id}`, buffet);
    } catch (error) {
        throw new Error("Failed to update buffet. Please try again."); 
    }
};

//get buffet price
export const fetchBuffetPrices = async () => {
    const response = await axios.get('/api/buffet-prices');
    return response.data;
  };