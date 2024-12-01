import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fsrotjrwllkimiidizgk.supabase.co', // Supabase API Base URL
  headers: {
    'Content-Type': 'application/json',
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcm90anJ3bGxraW1paWRpemdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMjgzMTQsImV4cCI6MjA0ODYwNDMxNH0.uiFog4O3BbOZhBC1z0LRFTtEE4p4z3PK5VQ5wKrRHzg',
  },
});

export default axiosInstance;
