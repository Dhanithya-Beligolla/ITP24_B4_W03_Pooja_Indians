import axios from "axios";

//base url
//const baseURL = import.meta.env.VITE_BASEURL;
const baseURL = "http://localhost:5534";

//get all data from the api
export const getAllBuffetReservations = async () => {
    try {
        const res = await axios.get(`${baseURL}/api/buffet`);
        return res.data.allReservations;
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

//make a reservation
export const makeBuffetReservation = async (data) => {

    try {
        const res = await axios.post(`${baseURL}/api/buffet/create`, data);
        console.log(res.newReservation);
        return res.newReservation;
    } catch (error) {
        // Handle server error
        console.error('Error making reservation:', error);
        throw new Error('Failed to make reservation. Please check your input and try again.');
    }
};

// delete reservation
export const deleteBuffetReservation = async (id) => {
    try {
        await axios.delete(`${baseURL}/api/buffet/delete/${id}`);
        
    } catch (error) {
        throw new Error("Failed to delete reservation. Please try again.");
        
    }
};

// update reservation
export const updateBuffetReservation = async (buffetreservation) => {
    try {
        await axios.put(`${baseURL}/api/buffet/update/${buffetreservation._id}`, buffetreservation);
    } catch (error) {
        console.error('Error updating reservation:', error);
        throw new Error('Failed to update reservation. Please check your input and try again.');
    }
};
