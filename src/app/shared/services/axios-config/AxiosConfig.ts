import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://localhost:5001/api', 
});
