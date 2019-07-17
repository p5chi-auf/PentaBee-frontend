import Axios from 'axios';
import jwt_decode from 'jwt-decode';

const TOKEN = localStorage.getItem ('token');
const DECODED_TOKEN = jwt_decode(TOKEN);
const ID_USER = DECODED_TOKEN.id;
const USER_NAME =  DECODED_TOKEN.username;

export default {
  token: TOKEN,
  idUser: ID_USER,
  userName: USER_NAME,
  getToken() {
    return  Axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  }
}
