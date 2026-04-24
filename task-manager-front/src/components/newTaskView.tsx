import React from "react";
import { Button } from "@mui/material"
import {TextField} from "@mui/material"
import { TaskPriority, TaskStatus } from "../api/interfaces/taskService";
import type { UserSearchResult } from "../api/interfaces/userService";


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

    userQuery: string;
    onUserQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userOptions: UserSearchResult[];
    onUserSelect: (user: UserSearchResult) => void;
};
export default function NewTaskFormView({
    formData,
    submitting,
    canSubmit,
    onChange,
    onSubmit,
    userQuery,
    onUserQueryChange,
    userOptions,
    onUserSelect
    }: NewTaskFormViewProps) {
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
                <label>Assign to user</label>
                <input type="text" value={userQuery} onChange={onUserQueryChange} placeholder="Search users..." />
                {userOptions.length > 0 && (
                    <ul style={{ border: "1px solid #ccc", padding: 0, margin: 0, listStyle: "none" }}>
                        {userOptions.map((user) => (
                            <li key={user.id} onClick={() => onUserSelect(user)} style={{ padding: 10, cursor: "pointer" }}>
                                {user.firstName} {user.lastName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Button type="submit" variant="contained" color="primary" disabled={!canSubmit || submitting}>
                {submitting ? "Creating..." : "Create Task"}
            </Button>
        </form>
    );
}