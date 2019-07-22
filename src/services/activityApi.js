import API from './';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {
  getActivityList(data){
    return API.get(userEndpoints.ACTIVITIES, data);
  },
  getActivityDetails (id) {
    return API.get(userEndpoints.ACTIVITIES + '/' + id);
  },
  deleteActivity(id){
    return API.delete(userEndpoints.ACTIVITIES + '/' + id + '/delete')
  },
  createActivity(data){
    return API.post(userEndpoints.ACTIVITIES + '/create', data)
  }
};
