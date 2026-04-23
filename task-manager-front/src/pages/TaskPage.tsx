import { useTaskPage } from "../hooks/useTaskPage";
import { Filters, TaskCard } from "../components/taskView";

export const TaskPage = () => {
  const state = useTaskPage();

  return (
    <div>
      <h1>Tasks</h1>

      <Filters
        priority={state.priority}
        status={state.status}
        selectedPriority={state.selectedPriority}
        selectedStatus={state.selectedStatus}
        onPriorityChange={state.setSelectedPriority}
        onStatusChange={state.setSelectedStatus}
      />

      <div style={{ marginTop: 20 }}>
        {state.filteredTasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            priority={state.priority}
            status={state.status}
            isEditing={state.editingTaskId === t.id}
            editForm={state.editForm}
            onEdit={state.startEdit}
            onCancelEdit={state.cancelEdit}
            onSaveEdit={state.saveEdit}
            onEditFormChange={state.onEditFormChange}
            onQuickStatusChange={state.changeTaskStatus}
            saving={state.saving}
          />
        ))}
      </div>
    </div>
  );
};