import axios from "axios";

const api = axios.create({
  baseURL: "https://week3d2backend.vercel.app/api", // deployed backend
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
