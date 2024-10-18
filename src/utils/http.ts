import axios from "axios";
import { nprogress } from "@mantine/nprogress";
import { useAuthStore } from "../stores/auth";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  nprogress.start();
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    nprogress.complete();
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await httpClient.post("/api/auth/refresh");
        // console.log("refresh token", response);

        const token = response.data.accessToken;
        useAuthStore.setState({ token });
        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return httpClient(originalRequest);
      } catch (error) {
        useAuthStore.getState().logout();
        nprogress.complete();
        return Promise.reject(error);
      }
    }

    nprogress.complete();
    return Promise.reject(error);
  }
);

export default httpClient;
