import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'x-api-key': `${process.env.API_TOKEN}`,
    }
});
