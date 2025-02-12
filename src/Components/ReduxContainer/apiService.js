import axios from 'axios';

const API = axios.create({
   baseURL: 'http://localhost:5000/api',
   headers: { 'Content-Type': 'application/json' },
});

export const loginAPI = async (user) => {
   return await API.post('/user/login', user);
};

export const verifyEmailAPI = async (user) => {
   return await API.post('/user/verify/email', user);
};

export const signupAPI = async (user) => {
   return await API.post('/user/create/user', user);
};
