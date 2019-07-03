import Axios from 'axios';
const BASE_URL_RESOURCE = 'http://api.pentabee.local/api/activities/';

export default {


  GetActivityDetails (id) {
    return Axios.get(BASE_URL_RESOURCE + id);
  }
};
