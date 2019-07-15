import Axios from 'axios';
import CommonServices from './Services';

export default {
  login(data) {
    return Axios.post(CommonServices.base_url+'login', data);
  }
};
