import { useInsertionEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {taskService} from "../api/interfaces/taskService"
import type { NewTaskFormData } from "../components/newTaskView";
import { TaskPriority, TaskStatus } from "../api/interfaces/taskService";
import { userService, type UserSearchResult } from "../api/interfaces/userService";

export default function useNewTaskPage() {
    const navigate = useNavigate();
    
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState<NewTaskFormData>({
        title: '',
        description: '',
        dueDate: '',
        priority: TaskPriority.MEDIUM,
        status: TaskStatus.PENDING,
        userId: ''
    });

    const [userQuery, setUserQuery] = useState("");
    const [userOptions, setUserOptions] = useState<UserSearchResult[]>([]);
    const [selectedUser, setSelectedUser] = useState<UserSearchResult | null>(null);

    const canSubmit = Object.values(formData).every(value => value.trim() !== '');

    useInsertionEffect(() => {
        const loadUsers = async () => {
            if (userQuery.trim() === "") {
                setUserOptions([]);
                return;
            }
            try {
                const results = await userService.searchUsers(userQuery);
                setUserOptions(results);
            } catch (error) {
                toast.error("Failed to load users. Please try again.");
            }
        };
        const timer = setTimeout(loadUsers, 300); // Debounce user input
        return () => clearTimeout(timer);
    }, [userQuery]);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    function onUserQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserQuery(e.target.value);
    }

    function onUserSelect(user: UserSearchResult) {
        setSelectedUser(user);
        setUserQuery(`${user.firstName} ${user.lastName}`);
        setFormData((prev) => ({
            ...prev,
            userId: user.id
        }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("submit clicked");

        const payload= {
            title: formData.title.trim(),
            description: formData.description.trim(),
            dueDate:  formData.dueDate,
            priority: formData.priority,
            status: formData.status,
            userId: formData.userId.trim(), 
        }
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

    return { formData, submitting, canSubmit, onChange, onSubmit, userQuery, onUserQueryChange, userOptions, onUserSelect };
}   