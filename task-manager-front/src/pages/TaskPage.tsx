import { useTaskPage } from "../hooks/useTaskPage";
import { Filters } from "../components/taskView";
import { TaskCard } from "../components/taskView";
import { EditModal } from "../components/taskView";

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
            key={t.title}
            task={t}
            onEdit={state.setSelectedTask}
          />
        ))}
      </div>

      <EditModal
        task={state.selectedTask}
        onClose={() => state.setSelectedTask(null)}
      />
    </div>
  );
};