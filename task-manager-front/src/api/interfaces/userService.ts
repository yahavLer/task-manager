import { userHttp } from "../http";

export interface UserBoundary {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;

}
export type UserSearchResult = {
  id: string;
  firstName: string;
  lastName: string;
};
export const userService = {
    createUser: async (user: UserBoundary) => {
        const response = await userHttp.post("/create", user);
        return response.data;
    },
    getUserById: async (userId: string) => {
        const response = await userHttp.get(`/get/${userId}`);
        return response.data;
    },
    updateUser: async (userId: string, updatedUser: UserBoundary) => {
        const response = await userHttp.put(`/update/${userId}`, updatedUser);
        return response.data;
    },
    deleteUser: async (userId: string) => {
        const response = await userHttp.delete(`/delete/${userId}`);
        return response.data;
    },
    searchUsers: async (query: string) => {
        const response = await userHttp.get(`/search?query=${query}`);
        return response.data;
    }
    
    
};

