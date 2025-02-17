import axios from "axios";

const API_URL = "https://67b001cfdffcd88a67881ae7.mockapi.io"; 

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
