import axios from 'axios';

// Base API configuration
const API_BASE_URL = 'http://localhost:8080/journal';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('jwt_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/public', credentials);
    return response.data;
  },
  
  signup: async (userData) => {
    const response = await api.post('/public/signup', userData);
    return response.data;
  },
  
  healthCheck: async () => {
    const response = await api.get('/public/health-check');
    return response.data;
  }
};

// Journal API calls
export const journalAPI = {
  getAllEntries: async () => {
    const response = await api.get('/journal');
    return response.data;
  },
  
  getEntryById: async (id) => {
    const response = await api.get(`/journal/id/${id}`);
    return response.data;
  },
  
  createEntry: async (entryData) => {
    const response = await api.post('/journal', entryData);
    return response.data;
  },
  
  updateEntry: async (id, entryData) => {
    const response = await api.put(`/journal/id/${id}`, entryData);
    return response.data;
  },
  
  deleteEntry: async (id) => {
    const response = await api.delete(`/journal/id/${id}`);
    return response.data;
  }
};

// User API calls
export const userAPI = {
  getProfile: async () => {
    const response = await api.get('/user');
    return response.data;
  },
  
  updateProfile: async (userData) => {
    const response = await api.put('/user', userData);
    return response.data;
  },
  
  deleteAccount: async () => {
    const response = await api.delete('/user');
    return response.data;
  }
};

// Admin API calls
export const adminAPI = {
  getAllUsers: async () => {
    const response = await api.get('/admin/all-users');
    return response.data;
  },
  
  createAdminUser: async (userData) => {
    const response = await api.post('/admin/create-admin-user', userData);
    return response.data;
  }
};

export default api;