import httpClient from "../utils/http";

const URL = "/api/user";

const apiUser = {
  profile: () => {
    return httpClient.get(`${URL}/profile`);
  },
};

export default apiUser;
