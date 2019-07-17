import Axios from 'axios';
import { userEndpoints } from '@/constants/apiEndpoints';
import jwt_decode from 'jwt-decode';

export default {
  getUserId() {
    const token = localStorage.getItem('token');
    const { id } = jwt_decode(token);

    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return id;
  },
  userInfo(id) {
    return Axios.get(userEndpoints.USER + id);
  },
  editUser(id, data) {
    return Axios.post(userEndpoints.USER + id + '/edit', data);
  },
  delete(data) {
    return Axios.delete(userEndpoints.USER + data.id + '/delete');
  },
  changePassword(id, data) {
    return Axios.post(userEndpoints.USER + id + '/change_password', data);
  },
  getTechnologies() {
    return Axios.get(userEndpoints.TECHNOLOGIES);
  }
};
