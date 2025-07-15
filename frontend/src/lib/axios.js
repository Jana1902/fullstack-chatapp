import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstack-chatapp-production-5710.up.railway.app/api",
  withCredentials: true,
});
