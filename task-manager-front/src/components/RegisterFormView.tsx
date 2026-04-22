import React from "react";
import { Button } from "@mui/material"
import {TextField} from "@mui/material"

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
};

type RegisterFormViewProps = {
  formData: RegisterFormData;
  submitting: boolean;
  canSubmit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function RegisterFormView({ formData, submitting, canSubmit, onChange, onSubmit }: RegisterFormViewProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
            <h2>Register</h2>
            </div>

            <div className="space-y-2">
            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
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
                {submitting ? "Registering..." : "Register"}
            </Button>
        </form>
    );
}