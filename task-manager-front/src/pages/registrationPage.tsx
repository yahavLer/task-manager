import RegisterFormView from "../components/RegisterFormView";
import useRegistrationPage from "../hooks/useRegistrationPage";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
    const { formData, submitting, canSubmit, onChange, onSubmit } = useRegistrationPage();
    const navigate = useNavigate();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <RegisterFormView
                formData={formData}
                submitting={submitting}
                canSubmit={canSubmit}
                onChange={onChange}
                onSubmit={onSubmit}
                onGoToLogin={() => navigate("/login")}
            />
        </div>
    );
}