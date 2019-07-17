import Axios from 'axios';
import CommonServices from './Services';

export default {
  getActivityDetails (id) {
    CommonServices.getToken();
    return Axios.get(CommonServices.baseUrl + 'activities/' + id);
  },
  getActivityList(data){
    CommonServices.getToken();
    return Axios.get(CommonServices.baseUrl + 'activities' + data);
  },
  deleteActivity(id){
    CommonServices.getToken();
    return Axios.delete(CommonServices.baseUrl + 'activities/' + id + '/delete')
  },
  createActivity(data){
    CommonServices.getToken();
    return Axios.post(CommonServices.baseUrl + 'activities/create', data)
  }
};
