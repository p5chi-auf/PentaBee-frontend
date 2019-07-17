import Axios from 'axios';
import CommonServices from './services';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {
  getActivityList(data){
    CommonServices.getToken();
    return Axios.get(userEndpoints.ACTIVITIES + data);
  },
  getActivityDetails (id) {
    CommonServices.getToken();
    return Axios.get(userEndpoints.ACTIVITIES + '/' + id);
  },

  deleteActivity(id){
    CommonServices.getToken();
    return Axios.delete(userEndpoints.ACTIVITIES + '/' + id + '/delete')
  },
  createActivity(data){
    CommonServices.getToken();
    return Axios.post(userEndpoints.ACTIVITIES + '/create', data)
  }
};
