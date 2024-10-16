import httpClient from "../utils/http";

const URL = "/auth";

const authApi = {
  login: (username: string, password: string) => {
    return httpClient.post(`${URL}/login`, { username, password });
  },

  register: (name: string, email: string, password: string) => {
    return httpClient.post(`${URL}/register`, { name, email, password });
  },
};

export default authApi;
