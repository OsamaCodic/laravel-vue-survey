import axios from 'axios';
import store from './store';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

//use interceptor for passing token inside axios requests
axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
})

export default axiosClient;