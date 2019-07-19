import Axios from 'axios';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {
  getActivityList(data){
    return Axios.get(userEndpoints.ACTIVITIES + data);
  },
  getActivityDetails (id) {
    return Axios.get(userEndpoints.ACTIVITIES + '/' + id);
  },
  deleteActivity(id){
    return Axios.delete(userEndpoints.ACTIVITIES + '/' + id + '/delete')
  },
  createActivity(data){
    return Axios.post(userEndpoints.ACTIVITIES + '/create', data)
  },
  editActivity(id, data){
    return Axios.post( userEndpoints.ACTIVITIES +'/' + id + '/edit', data)
  }
};
