import React from "react";
import { Button } from "@mui/material"
import {TextField} from "@mui/material"
import { TaskPriority, TaskStatus } from "../api/interfaces/taskService";


export type NewTaskFormData = {
    title: string;
    description: string;
    dueDate: string;
    priority: TaskPriority;
    status: TaskStatus;
    userId: string;
};

type NewTaskFormViewProps = {
  formData: NewTaskFormData;
  submitting: boolean;
  canSubmit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export default function NewTaskFormView({ formData, submitting, canSubmit, onChange, onSubmit }: NewTaskFormViewProps) {
    return (
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
                <label>title</label> 
                <input type="text" name="title" value={formData.title} onChange={onChange} />
            </div>
            <div>
                <label>description</label> 
                <input type="text" name="description" value={formData.description} onChange={onChange} />
            </div>
            <div>
                <label>dueDate</label>
                <input type="date" name="dueDate" value={formData.dueDate} onChange={onChange} />
            </div>
            <div>
                <label>priority</label>
                <select name="priority" value={formData.priority} onChange={onChange}>
                    {Object.values(TaskPriority).map((priority) => (
                        <option key={priority} value={priority}>
                            {priority}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>status</label>
                <select name="status" value={formData.status} onChange={onChange}>
                    {Object.values(TaskStatus).map((status) => (
                        <option key={status} value={status}>
                            {status}    
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>userId</label>
                <input type="text" name="userId" value={formData.userId} onChange={onChange} />
            </div>
            <Button type="submit" variant="contained" color="primary" disabled={!canSubmit || submitting}>
                {submitting ? "Creating..." : "Create Task"}
            </Button>
        </form>
    );
}