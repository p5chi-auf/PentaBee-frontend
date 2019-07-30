import API from './';
import { userEndpoints } from '@/constants/apiEndpoints';

export default {
  userInfo(id) {
    return API.get(userEndpoints.USER + id);
  },
  editUser(data) {
    const { id } = data;
    if (id) {
      return API.post(userEndpoints.USER + id + '/edit', data);
    }
    return Promise.reject('Id not found');
  },
  delete(data) {
    const { id } = data;
    if (id) {
      return API.delete(userEndpoints.USER + id + '/delete', data);
    }
    return Promise.reject('Id not found');
  },
  changePassword(data) {
    const { id } = data;
    if (id) {
      return API.post(userEndpoints.USER + id + '/change_password', data);
    }
    return Promise.reject('Id not found');
  },
  userList(data) {
    return API.get( userEndpoints.USER + '/list', data);
  },
  getTechnologies() {
    return API.get(userEndpoints.TECHNOLOGIES);
  }
};
