import Axios from 'axios';
const API_USER= 'http://api.pentabee.local/api/user/';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  getUserDetails(){
    const decoded = jwt_decode(localStorage.getItem('token'));
    console.log(decoded.id);
    const idUser=decoded.id;
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return idUser;
  },
  userInfo(id) {
    return Axios.get(API_USER + id);
  },
  editUser(data) {
    return Axios.post(API_USER + data.id + '/edit', data);
  },
  delete(id) {
    return Axios.delete(API_USER + id + '/delete');
  },
  changePassword(data) {
    return Axios.post(API_USER + data.id + '/change_password', data);
  },
};
