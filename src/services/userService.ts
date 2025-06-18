import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

export const getMe = () => {
  return axios.get(`${API_URL}/me`);
};
