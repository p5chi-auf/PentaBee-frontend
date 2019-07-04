import Axios from 'axios';
const API_USER= 'http://api.pentabee.local/api/user/';
import axios from 'axios';

export default {
  mounted(){
    const token = localStorage.getItem('token');
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  getUserInfo(id) {
    return Axios.get(API_USER + id);
  },
  editUser(id) {
    return Axios.post(API_USER + id + '/edit');
  },
  delete(id) {
    return Axios.delete(API_USER + id + '/delete');
  },
  changePassword(data) {
    return Axios.post(API_USER + 52 + '/change_password', data);
  },
};
