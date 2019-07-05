import Axios from 'axios';
const token = localStorage.getItem ('token');
import CommonServices from './Services';

export default {
  login(data) {
    return Axios.post(CommonServices.BASE_URL+'login', data);
  }
};
