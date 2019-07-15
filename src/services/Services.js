import Axios from 'axios';
import jwt_decode from 'jwt-decode';
const TOKEN = localStorage.getItem ('token');
const BASE_URL='http://api.pentabee.local/api/';
const decoded = jwt_decode(TOKEN);
const IdUSER = decoded.id;
const USERNAME =  decoded.username;

export default {
  base_url: BASE_URL,
  token: TOKEN,
  idUser: IdUSER,
  username: USERNAME,
  getToken() {
   return  Axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  },
}
