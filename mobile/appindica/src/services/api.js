import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.102:7050/app'
});

export default api;