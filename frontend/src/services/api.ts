import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.150:3333/api',
});
export default api;
