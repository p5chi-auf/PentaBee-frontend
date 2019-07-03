import Axios from 'axios';
const API_USER= 'http://api.pentabee.local/api/user/';

export default {
  getUserInfo(id) {
    return Axios.get(API_USER + id);
  },
  edit(id) {
    return Axios.post(API_USER + id + '/edit');
  },
  delete(id) {
    return Axios.delete(API_USER + id + '/delete');
  },
  changePassword(id) {
    return Axios.post(API_USER + id + '/change_password');
  },
};
