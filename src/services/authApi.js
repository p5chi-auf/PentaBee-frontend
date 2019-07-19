import Axios from 'axios';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {

  login(data) {
    return Axios.post(userEndpoints.LOGIN, data);
  },
  register(data) {
    return Axios.post( userEndpoints.REGISTER, data);
  }
};
