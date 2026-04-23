import React from "react";
import { Button } from "@mui/material"
import {TextField} from "@mui/material"


export type NewTaskFormData = {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
};

type NewTaskFormViewProps = {
  formData: NewTaskFormData;
  submitting: boolean;
  canSubmit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function NewTaskFormView({ formData, submitting, canSubmit, onChange, onSubmit }: NewTaskFormViewProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
            <h2>Create Task</h2>
            </div>

            <div className="space-y-2">
            <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Due Date"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Priority"
                name="priority"
                value={formData.priority}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Status"
                name="status"
                value={formData.status}
                onChange={onChange}
                fullWidth
            />
            </div>

           <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!canSubmit || submitting}
            >
                {submitting ? "Creating..." : "Create Task"}
            </Button>
        </form>
    );
}