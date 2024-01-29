import axios from 'axios';
import { API_URL } from './auth';



const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default api;