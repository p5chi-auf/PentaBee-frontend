import axios from "axios";
import { basePath } from '../constants/apiEndpoints';
const API = axios.create({
  baseURL: basePath
});

API.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default API;
