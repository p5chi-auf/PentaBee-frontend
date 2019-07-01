import Axios from 'axios';
const API_ACTIVITY_RESOURCE = 'http://api.pentabee.local/api/activities/220';

export default {

  activity (data) {
    return Axios.get(API_ACTIVITY_RESOURCE, data);
  }
};
