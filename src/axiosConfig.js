import axios from 'axios';

const defaultBaseURL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8000/api/v1' 
    : 'http://ec2-34-207-220-36.compute-1.amazonaws.com/api/v1';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || defaultBaseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

export default axiosInstance;
