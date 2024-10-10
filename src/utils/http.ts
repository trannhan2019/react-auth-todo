import axios from "axios";
import { nprogress } from "@mantine/nprogress";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    nprogress.complete();
    return response;
  },
  (error) => {
    nprogress.complete();
    return Promise.reject(error);
  }
);

export default httpClient;
