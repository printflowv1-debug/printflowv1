import axios from "axios";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "https://api.printflowv1.com",
});

export default API;
