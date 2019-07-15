import Axios from 'axios';
import CommonServices from './Services';

export default {
  getActivityDetails (id) {
    CommonServices.getToken();
    return Axios.get(CommonServices.base_url+ 'activities/'+ id);
  },
  getActivityList(data){
    CommonServices.getToken();
    return Axios.get(CommonServices.base_url +'activities'+data);
  },
  deleteActivity(id){
    CommonServices.getToken();
    return Axios.delete(CommonServices.base_url+'activities/' + id +'/delete')
  },
  createActivity(data){
    CommonServices.getToken();
    return Axios.post(CommonServices.base_url+'activities/create', data)
  }

};
