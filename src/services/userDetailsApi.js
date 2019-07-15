import Axios from './';
import { userEndpoints } from '@/constants/apiEndpoints';
import jwt_decode from 'jwt-decode';

export default {
  getUserDetails() {
    const token = localStorage.getItem('token');
    const { id } = jwt_decode(token);
    console.log(id);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return id;
  },
  userInfo(id) {
    return Axios.get(userEndpoints.USER + id);
  },
  editUser(data) {
    return Axios.post(userEndpoints.USER + data.id + '/edit', data);
  },
  delete(id) {
    return Axios.delete(userEndpoints.USER + id + '/delete');
  },
  changePassword(data) {
    return Axios.post(userEndpoints.USER + data.id + '/change_password', data);
  },
  getTechnologies() {
    return Axios.get(userEndpoints.TECHNOLOGIES);
  },
};
