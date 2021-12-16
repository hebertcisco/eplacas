import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
    }
});
