import axios from "axios";

//database url
const baseURL = import.meta.env.VITE_BASEURL;

//get all data from the api
export const getAllData = async() => {
    try {
        const res = await axios.get(`${baseURL}/api/poster`);
        return res.data.allPosters;
    } catch (error) {
        console.log(error);
    }
}