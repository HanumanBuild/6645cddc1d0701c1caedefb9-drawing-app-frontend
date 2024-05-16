import axios from 'axios';

const api = axios.create({
  baseURL: process.env.DRAWING_APP_BACKEND_URL,
});

export default api;