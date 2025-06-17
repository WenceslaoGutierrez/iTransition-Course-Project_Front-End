import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/auth`;

export const register = (firstName: string, lastName: string, email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { firstName, lastName, email, password });
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  axios.post(`${API_URL}/logout`);
  localStorage.removeItem('token');
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};
