import axios from "axios";
import { API_BASE_URL } from "./config";

export const taskHttp = axios.create({ baseURL: `${API_BASE_URL}/api/tasks` });
export const userHttp = axios.create({ baseURL: `${API_BASE_URL}/api/users` });
