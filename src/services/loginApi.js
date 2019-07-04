import Axios from 'axios';
const token = localStorage.getItem ('token');
import CommonServices from './CommunServices';

export default {
  login(data) {
    CommonServices.getToken();
    return Axios.post(CommonServices.BASE_URL+'login', data);
  }
};
