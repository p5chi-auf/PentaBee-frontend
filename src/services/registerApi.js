import Axios from 'axios';
const API_REGISTER_RESOURCE = 'http://api.pentabee.local/api/register';

export default {

  register(data) {
    return Axios.post(API_REGISTER_RESOURCE, data);
  }
};
