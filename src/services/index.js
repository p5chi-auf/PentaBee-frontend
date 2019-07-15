import Axios from 'axios';

export default Axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
