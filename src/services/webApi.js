import axios from 'axios';

export const SystemResidenceAPI = axios.create({
    baseURL:"https://api-system-residence-dsn.herokuapp.com"
});