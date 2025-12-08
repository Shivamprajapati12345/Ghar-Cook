import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Payment API functions
export const paymentAPI = {
  createOrder: async (orderData) => {
    const response = await api.post("/payment/create-order", orderData);
    return response.data;
  },

  verifyPayment: async (paymentData) => {
    const response = await api.post("/payment/verify", paymentData);
    return response.data;
  },

  getUserPayments: async () => {
    const response = await api.get("/payment/user-payments");
    return response.data;
  },
};

export default api;