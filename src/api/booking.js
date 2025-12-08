import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const bookingAPI = {
  createBooking: async (data) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_BASE_URL}/booking/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getUserBookings: async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/booking/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export { bookingAPI };