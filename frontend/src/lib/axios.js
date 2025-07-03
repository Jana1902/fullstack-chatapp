import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-application-m53e.onrender.com/api",
  withCredentials: true,
});
