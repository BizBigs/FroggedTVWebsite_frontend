import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://0.0.0.0:8998/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosApi.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosApi.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosApi;