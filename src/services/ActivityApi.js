import TokenService from 'axios';
import CommonServices from './Services';

export default {
  getActivityDetails (id) {
    CommonServices.getToken();
    return TokenService.get(CommonServices.baseUrl + 'activities/' + id);
  },
  getActivityList(data){
    CommonServices.getToken();
    return TokenService.get(CommonServices.baseUrl + 'activities' + data);
  },
  deleteActivity(id){
    CommonServices.getToken();
    return TokenService.delete(CommonServices.baseUrl + 'activities/' + id + '/delete')
  },
  createActivity(data){
    CommonServices.getToken();
    return TokenService.post(CommonServices.baseUrl + 'activities/create', data)
  }
};
