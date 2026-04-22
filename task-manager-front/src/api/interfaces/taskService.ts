import { API_BASE_URL } from "./config";
import { taskHttp } from "./http";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "DONE";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export interface TaskBoundary {
    title : string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date;
    userId: string;
}

export const taskService = {
    createTask: async (task: TaskBoundary) => {
        const response = await taskHttp.post(`${API_BASE_URL}/tasks`, task);
        return response.data;
    },
    getTasks: async () => {
        const response = await taskHttp.get(`${API_BASE_URL}/tasks`);
        return response.data;
    },
    updateTask: async (taskId: string, updatedTask: TaskBoundary) => {
        const response = await taskHttp.put(`${API_BASE_URL}/tasks/${taskId}`, updatedTask);
        return response.data;
    },
    deleteTask: async (taskId: string) => {
        const response = await taskHttp.delete(`${API_BASE_URL}/tasks/${taskId}`);
        return response.data;
    }
};