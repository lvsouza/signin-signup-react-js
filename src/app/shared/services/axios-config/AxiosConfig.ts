import axios from 'axios';

export const Api = axios.create({
    baseURL: "${API_URL}" || 'http://localhost:3333/',
});


