import Axios from 'axios';
const BASE_URL = 'http://api.pentabee.local/api/';

export default {

  login(data) {
    return Axios.post(BASE_URL + '/login', data);
  },
  register(data) {
    return Axios.post(BASE_URL + '/register', data);
  }
};
