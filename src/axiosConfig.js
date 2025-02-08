import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://ec2-34-207-220-36.compute-1.amazonaws.com/api/v1";

console.log("API Base URL:", API_URL);  // Debugging

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;
