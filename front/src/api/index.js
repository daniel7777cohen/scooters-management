import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: BASE_URL,
});

export default instance;
