import TokenService from 'axios';
import jwt_decode from 'jwt-decode';

const TOKEN = localStorage.getItem ('token');
const BASE_URL='http://api.pentabee.local/api/';
const DECODED_TOKEN = jwt_decode(TOKEN);
const ID_USER = DECODED_TOKEN.id;
const USER_NAME =  DECODED_TOKEN.username;

export default {
  baseUrl: BASE_URL,
  token: TOKEN,
  idUser: ID_USER,
  userName: USER_NAME,
  getToken() {
   return  TokenService.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  }
}
