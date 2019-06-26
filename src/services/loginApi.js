import Axios from 'axios';
const API_LOGIN_RESOURCE = 'http://api.pentabee.local/api/login';

export default {

  login(data) {
    return Axios.post(API_LOGIN_RESOURCE, data);
  }
};
