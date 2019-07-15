import TokenServices from 'axios';
import CommonServices from './Services';

export default {
  login(data) {
    return TokenServices.post(CommonServices.baseUrl+'login', data);
  }
};
