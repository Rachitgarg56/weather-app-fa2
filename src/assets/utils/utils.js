import axios from "axios";

export const getWeatherData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

export const getDataAge = (date_and_time) => {
    const currDate = new Date();
    const prevDate = new Date(date_and_time); // Removed comma for consistency
    const hrs = (currDate - prevDate) / (1000 * 60 * 60);
    return Math.floor(hrs);    
}