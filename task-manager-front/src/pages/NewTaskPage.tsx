import NewTaskFormData from "../components/newTaskView";
import useNewTaskPage from "../hooks/useNewTaskPage";

export default function NewTaskPage() {
    const { 
        formData,
        submitting,
        canSubmit,
        onChange,
        onSubmit,
        userQuery,
        onUserQueryChange,
        userOptions,
        onUserSelect,
     } = useNewTaskPage();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <NewTaskFormData
                formData={formData}
                submitting={submitting}
                canSubmit={canSubmit}
                onChange={onChange}
                onSubmit={onSubmit}
                userQuery={userQuery}
                onUserQueryChange={onUserQueryChange}
                userOptions={userOptions}
                onUserSelect={onUserSelect}
            />
        </div>
    );
}