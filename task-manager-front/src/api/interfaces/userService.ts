import { API_BASE_URL } from "../config"
import { userHttp } from "../http";

export interface UserBoundary {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;

}

export const userService = {
    createUser: async (user: UserBoundary) => {
        const response = await userHttp.post(`${API_BASE_URL}${API_BASE_URL}`, user);
        return response.data;
    },
    getUsers: async () => {
        const response = await userHttp.get(`${API_BASE_URL}${API_BASE_URL}`);
        return response.data;
    },
    updateUser: async (userId: string, updatedUser: UserBoundary) => {
        const response = await userHttp.put(`${API_BASE_URL}${API_BASE_URL}/${userId}`, updatedUser);
        return response.data;
    },
    deleteUser: async (userId: string) => {
        const response = await userHttp.delete(`${API_BASE_URL}${API_BASE_URL}/${userId}`);
        return response.data;
    }
};

