import Axios from 'axios';
const API_LOGIN_RESOURCE = 'http://api.pentabee.local/api/register';

export default {

  register(data) {
    return Axios.post(API_LOGIN_RESOURCE, data);
  }
};
