import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true, // Not needed for auth endpoints
});

// Auth API functions
export const authAPI = {
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout");
    localStorage.removeItem("token");
    return response.data;
  },

  sendOtp: async (phone) => {
    const response = await api.post("/auth/send-otp", { phone });
    return response.data;
  },

  verifyOtp: async (phone, otp) => {
    const response = await api.post("/auth/verify-otp", { phone, otp });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  },
};

export default api;