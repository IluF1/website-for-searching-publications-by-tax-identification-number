import axios from 'axios';
import { API_URL } from './auth';



const api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default api;