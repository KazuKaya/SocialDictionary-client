import axios from 'axios';

const API_URL = "https://localhost:7037/api/Content";

export const getContents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Contents Error:", error);
        throw error;
    }
};