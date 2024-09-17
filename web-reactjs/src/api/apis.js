import api from './api';

export const API = {
    getAllUsers: () => api.get('/user/getAllUser'),
    getOneUser: (payload) => api.post("/user/getOneUser", payload),
    postLogin: (payload) => api.post('/user/loginUser', payload),
    postRegister: (payload) => api.post('/user/registerUser', payload)
};