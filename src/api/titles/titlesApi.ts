import axios from 'axios';

const API_URL = "https://localhost:7037/api/Title";

export const getTitles = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Titles Error:", error);
        throw error;
    }
};

export const getTrendingTitles = async () => {
    try {
        const response = await axios.get(`${API_URL}/trending`);
        return response.data;
    } catch (error) {
        console.error("trending  Error:", error);
        throw error;
    }
};
