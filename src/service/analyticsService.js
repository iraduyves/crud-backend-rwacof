import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.BASE_URL


export const getAnalytics = async () => {
    try {
        const url = `${URL}/analytics`
        const response = await axios.get(`${url}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching analytics data:", error.message);
        throw error;
    }
};

export const getAgricultureCommodities = async () => {
    try {
        const url = `${URL}/commodities`
        const response = await axios.get(`${url}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching commodity trends:", error.message);
        throw error;
    }
};
