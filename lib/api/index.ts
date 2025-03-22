import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor to add the token
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('psg_auth_token'); // Assuming the token is stored in localStorage
  if (token) {
    config.headers['x-auth-token'] = token; // Set token in headers
  }
  return config;
});

// Response Interceptor to handle errors
api.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        localStorage.removeItem('x-auth-token'); // Optional: Remove token on unauthorized error
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error.response?.data || { error: 'An unknown error occurred' });
  }
);

// Generic API Response Type
export type ApiResponse<T> = { error?: string } & T;

export default api;
