import API from './';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {
  login(data) {
    return API.post(userEndpoints.LOGIN, data);
  },
  register(data) {
    return API.post( userEndpoints.REGISTER, data);
  }
};
