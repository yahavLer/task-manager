import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "../components/LoginFormView";
import { userService } from "../api/interfaces/userService";

export default function useLoginPage() {
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const canSubmit =
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

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
      await userService.loginUser({
        email: formData.email.trim(),
        password: formData.password.trim(),
      });

      toast.success("Login successful!");
      navigate("/tasks");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return { formData, submitting, canSubmit, onChange, onSubmit };
}