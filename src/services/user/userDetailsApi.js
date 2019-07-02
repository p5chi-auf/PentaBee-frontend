import Axios from 'axios';
const API_USER_RESOURCE = 'http://api.pentabee.local/api/user/{id}';

export default {

  edit(id) {
    return Axios.get(API_USER_RESOURCE, id);
  }
};

