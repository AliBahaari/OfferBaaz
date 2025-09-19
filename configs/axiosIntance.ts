import { useAuthStore } from "@/stores/AuthStore";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
