import Axios from 'axios';
const API_USER= 'http://api.pentabee.local/api/user/';
import axios from 'axios';

export default {
  getUserDetails(){
    const token = localStorage.getItem('token');
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  userInfo(id) {
    return Axios.get(API_USER + id);
  },
  editUser(data) {
    return Axios.post(API_USER + 52 + '/edit', data);
  },
  delete(id) {
    return Axios.delete(API_USER + id + '/delete');
  },
  changePassword(data) {
    return Axios.post(API_USER + 52 + '/change_password', data);
  },
};
