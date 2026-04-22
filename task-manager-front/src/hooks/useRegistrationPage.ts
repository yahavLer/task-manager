import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {userService} from "../api/interfaces/userService"
import type { RegisterFormData } from "../components/RegisterFormView";

export default function useRegistrationPage() {
    const navigate = useNavigate();
    
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState<RegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
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
        try {
            await userService.createUser(formData)
            toast.success("Registration successful! Please log in.");
            navigate("/login");
        } catch (error) {
            toast.error("Registration failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return { formData, submitting, canSubmit, onChange, onSubmit };
}   