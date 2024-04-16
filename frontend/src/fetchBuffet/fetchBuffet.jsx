import axios from "axios";

//base url
const baseURL = import.meta.env.VITE_BASEURL;

//get all data from the api
export const getAllBuffets = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/buffetadmin`);
        return res.data.allBuffets;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

//make a reservation
export const addBuffet = async (data) => {

    try {
        const res = await axios.post(`${baseURL}/api/buffetadmin/create`, data);
        return res.newBuffet;
        
    } catch (error) {
        // Handle server error
        console.error('Error making reservation:', error);
        throw new Error('Failed to make reservation. Please check your input and try again.');
    }
};