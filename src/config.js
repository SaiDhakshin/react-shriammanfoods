import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : 'https://shriammanreact.herokuapp.com/'
})