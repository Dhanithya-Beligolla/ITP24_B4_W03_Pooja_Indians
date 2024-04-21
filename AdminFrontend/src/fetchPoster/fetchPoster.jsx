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

//create new poster
export const addPoster = async (data) => {
    //uploading image
    if(data.image){
        const form = new FormData();
        const name = Date.now() + data.image.name;
        form.append("name", name);
        form.append("file", data.image);

        data.image = name;

        try {
            await axios.post(`${baseURL}/api/upload`,form);
        } catch (error) {
            throw new Error(error);
        }

    }
    try {
        const res = await axios.post(`${baseURL}/api/poster/create`,data);
        return res.newPoster;
    } catch (error) {
        throw new Error(error);
    }
};

//delete posters
export const removePoster = async (id) => {
    try {
        await axios.delete(`${baseURL}/api/poster/delete/${id}`);
    } catch (error) {
        throw new Error(error);
    }
};

// update poster
export const updatePoster = async (poster) => {
    try {
        await axios.put(`${baseURL}/api/poster/update/${poster._id}`, poster);
    } catch (error) {
        throw new Error(error);
    }
}