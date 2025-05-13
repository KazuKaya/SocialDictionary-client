import axios from 'axios';

const API_URL = "https://localhost:7037/api/User";

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Users Error:", error);
        throw error;
    }
};