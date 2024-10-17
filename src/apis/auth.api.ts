import httpClient from "../utils/http";
import axios from "../utils/axios";

const URL = "/api/auth";

const authApi = {
  login: (email: string, password: string) => {
    return httpClient.post(`${URL}/login`, { email, password });
  },

  register: (name: string, email: string, password: string) => {
    return axios.post(`${URL}/register`, { name, email, password });
  },
};

export default authApi;
