import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {taskService} from "../api/interfaces/taskService"
import type { NewTaskFormData } from "../components/newTaskView";
export default function useNewTaskPage() {
    const navigate = useNavigate();
    
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState<NewTaskFormData>({
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        status: ''
    });
    const canSubmit = Object.values(formData).every(value => value.trim() !== '');

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("submit clicked");

        const payload= {
            title: formData.title.trim(),
            description: formData.description.trim(),
            dueDate: formData.dueDate,
            priority: formData.priority,
            status: formData.status
        }
        console.log("payload", payload)
        try {
            await taskService.createTask(payload)
            toast.success("Task created successfully!");
            navigate("/tasks");
        } catch (error) {
            toast.error("Failed to create task. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return { formData, submitting, canSubmit, onChange, onSubmit };
}   