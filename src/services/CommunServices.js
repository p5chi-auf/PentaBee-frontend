import axios from 'axios';
const token = localStorage.getItem ('token');
const BASE_URL='http://api.pentabee.local/api/';

export default {
  BASE_URL: BASE_URL,
  getToken() {
   return  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
}
