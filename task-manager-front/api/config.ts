import axios from "axios";

export const API_BASE_URL ="http://localhost:8080";

export const taskHttp = axios.create({ baseURL: "http://localhost:8080" });
export const userHttp = axios.create({ baseURL: "http://localhost:8080" });