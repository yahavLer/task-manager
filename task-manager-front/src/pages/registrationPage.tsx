import RegisterFormView from "../components/RegisterFormView";
import useRegistrationPage from "../hooks/useRegistrationPage";

export default function RegistrationPage() {
    const { formData, submitting, canSubmit, onChange, onSubmit } = useRegistrationPage();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <RegisterFormView
                formData={formData}
                submitting={submitting}
                canSubmit={canSubmit}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}