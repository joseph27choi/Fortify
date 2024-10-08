import axios from "axios";
import { cookie } from "../data/cookie";

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

const onRequest = (data) => {
    const { method, url, headers } = data;
    if (process.env.REACT_APP_SERVER_URL === process.env.REACT_APP_LOCAL_URL) {
      console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);
    }
    headers.Authorization = cookie.get("Authorization");
    return data;
  };
  
  const onResponse = (res) => {
    const { method, url } = res.config;
    if (process.env.REACT_APP_SERVER_URL === process.env.REACT_APP_LOCAL_URL) {
      console.log(
        `🔅 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${res.status}`
      );
    }
    return res;
  };

  const onError = (error) => {
    if (axios.isAxiosError(error)) {
      const { method, url } = error.config;
      if (error.response) {
        const { statusCode, message } = error.response.data;
        if (
          process.env.REACT_APP_SERVER_URL === process.env.REACT_APP_LOCAL_URL
        ) {
          console.log(
            `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`
          );
        }
      }
    } else {
      if (process.env.REACT_APP_SERVER_URL === process.env.REACT_APP_LOCAL_URL) {
        console.log(`🚨 [API] | Error ${error.message}`);
      }
    }
    return Promise.reject(error);
  };

api.interceptors.request.use((data) => onRequest(data));

api.interceptors.response.use(onResponse, onError);

export default api;
