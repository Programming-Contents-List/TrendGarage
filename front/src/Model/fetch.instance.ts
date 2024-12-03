import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // Supabase 프로젝트 URL
  headers: {
    apikey: '', // Supabase API Key
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
