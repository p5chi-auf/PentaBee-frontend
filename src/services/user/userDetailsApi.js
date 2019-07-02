import Axios from 'axios';
const API_USER= 'http://api.pentabee.local/api/user/';
const API_USER_EDIT = 'http://api.pentabee.local/api/user/{id}/edit';
const API_DELETE = 'http://api.pentabee.local/api/user/{id}/delete';
const API_CHANGE_PASSWORD = 'http://api.pentabee.local/api/user/{id}/change_password';


export default {
  userInfo(id) {
    return Axios.get(API_USER + id);
  },
  edit(id) {
    return Axios.post(API_USER_EDIT, id);
  },
  delete(id) {
    return Axios.delete(API_DELETE, id);
  },
  changePassword(id) {
    return Axios.post(API_CHANGE_PASSWORD, id);
  },
};
