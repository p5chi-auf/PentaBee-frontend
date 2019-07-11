import Axios from 'axios';
import CommonServices from './Services';

export default {
  getActivityDetails (id) {
    CommonServices.getToken();
    return Axios.get(CommonServices.BASE_URL+ 'activities/'+ id);
  },
  getActivityList(data){
    CommonServices.getToken();
    return Axios.get(CommonServices.BASE_URL +'activities'+data);
  },
  deleteActivity(id){
    CommonServices.getToken();
    return Axios.delete(CommonServices.BASE_URL+'activities/' + id +'/delete')
  },
  createActivity(data){
    CommonServices.getToken();
    return Axios.post(CommonServices.BASE_URL+'activities/create', data)
  }

};
