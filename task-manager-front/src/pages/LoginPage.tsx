import LoginFormView from "../components/LoginFormView";
import useLoginPage from "../hooks/useLoginPage";

export default function LoginPage() {
  const { formData, submitting, canSubmit, onChange, onSubmit } = useLoginPage();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <LoginFormView
        formData={formData}
        submitting={submitting}
        canSubmit={canSubmit}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}