import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const cookAPI = {
  getCooks: async (search = "") => {
    const token = localStorage.getItem('token');
    const params = search ? { search } : {};
    const response = await axios.get(`${API_BASE_URL}/cooks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  },
};
