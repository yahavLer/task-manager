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

const API_URL = '/api/tasks';
