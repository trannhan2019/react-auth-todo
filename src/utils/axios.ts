import axios from "axios";
import { nprogress } from "@mantine/nprogress";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    nprogress.complete();
    return response;
  },
  (error) => {
    nprogress.complete();
    return Promise.reject(error);
  }
);

if (import.meta.env.DEV) {
  axios.defaults.baseURL = "http://localhost:5000";
}

export default axios;
