import Axios from 'axios';
const token = localStorage.getItem ('token');
const BASE_URL='http://api.pentabee.local/api/';

export default {
  BASE_URL: BASE_URL,
  TOKEN: token,
  getToken() {
   return  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
}
