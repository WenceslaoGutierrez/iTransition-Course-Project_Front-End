import axios from 'axios';
import { getToken } from './authService';
import i18n from '../i18n';

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    const currentLanguage = i18n.language;
    if (currentLanguage) {
      config.headers['Accept-Language'] = currentLanguage;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
