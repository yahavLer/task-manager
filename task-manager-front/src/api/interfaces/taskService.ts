import { API_BASE_URL } from "../config";
import { taskHttp } from "../http";

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum TaskStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

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
        const response = await taskHttp.post("/create", task);
        return response.data;
    },
    getTaskById: async (taskId: string) => {
        const response = await taskHttp.get(`/get/${taskId}`);
        return response.data;
    },
    updateTask: async (taskId: string, updatedTask: TaskBoundary) => {
        const response = await taskHttp.put(`/update/${taskId}`, updatedTask);
        return response.data;
    },
    getAllTasks: async () => {
        const response = await taskHttp.get("/getAll");
        return response.data;
    },
    deleteTask: async (taskId: string) => {
        const response = await taskHttp.delete(`/delete/${taskId}`);
        return response.data;
    },
    getTaskByStatus: async (status: TaskStatus) => {
        const response = await taskHttp.get(`/getTaskByStatus/${status}`);
        return response.data;
    },
    getTaskPriorities: async (priority: TaskPriority) => {
        const response = await taskHttp.get(`/getTaskPriorities/${priority}`);
        return response.data;
    },
};