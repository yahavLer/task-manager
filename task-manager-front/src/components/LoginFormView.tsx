import React from "react";
import { Button, TextField } from "@mui/material";

export type LoginFormData = {
  email: string;
  password: string;
};

type LoginFormViewProps = {
  formData: LoginFormData;
  submitting: boolean;
  canSubmit: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function LoginFormView({
  formData,
  submitting,
  canSubmit,
  onChange,
  onSubmit,
}: LoginFormViewProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <h2>Login</h2>
      </div>

      <div className="space-y-2">
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
      </div>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!canSubmit || submitting}
      >
        {submitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}