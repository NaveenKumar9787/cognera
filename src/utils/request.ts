import axios from 'axios';
//import { getToken } from './get-token';


const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
 });

 //console.log(request, 'requestrequest');

// Change request data/error here
// request.interceptors.request.use( (config:any) => {
//     const token = getToken();
//     config.headers = { ...config.headers, Authorization: `Bearer ${token ? token : ''}`,};
//     config.headers = { ...config.headers,};
//     return config;
//   },(error) => {
//     return Promise.reject(error);
//   }
// );

export default request;
