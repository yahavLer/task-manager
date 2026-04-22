import axios from "axios";

export const taskHttp = axios.create({ baseURL: "/api/tasks" });
export const userHttp = axios.create({ baseURL: "/api/users" });
