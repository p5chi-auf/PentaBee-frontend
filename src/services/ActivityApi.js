import Axios from 'axios';
import axios from 'axios';
const BASE_URL_RESOURCE = 'http://api.pentabee.local/api/activities/';
const token = localStorage.getItem ('token');

export default {
  mounted() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  GetActivityDetails (id) {
    return Axios.get(BASE_URL_RESOURCE + id);
  },
  GetActivityList(page){
    return Axios.get(BASE_URL_RESOURCE +'all/'+ page);
  }
};
