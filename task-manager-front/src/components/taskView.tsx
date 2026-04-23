import type { TaskBoundary, TaskPriority, TaskStatus } from "../api/interfaces/taskService";

export const Filters = ({
  priority,
  status,
  selectedPriority,
  selectedStatus,
  onPriorityChange,
  onStatusChange,
}: any) => (
  <div style={{ display: "flex", gap: 10 }}>
    <select
      value={selectedPriority}
      onChange={(e) => onPriorityChange(e.target.value)}
    >
      <option value="ALL">All Priorities</option>
      {priority.map((p: TaskPriority) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>

    <select
      value={selectedStatus}
      onChange={(e) => onStatusChange(e.target.value)}
    >
      <option value="ALL">All Status</option>
      {status.map((s: TaskStatus) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  </div>
);

export const TaskCard = ({ task, onEdit }: any) => (
  <div style={{ border: "1px solid #ccc", padding: 10 }}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <p>Priority: {task.priority}</p>
    <p>Status: {task.status}</p>
    <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
    <p>User ID: {task.userId}</p>
    <button onClick={() => onEdit(task)}>Edit</button>
  </div>
);

export const EditModal = ({ task, onClose }: any) => {
  if (!task) return null;

  return (
    <div className="modal">
      <h3>Edit {task.title}</h3>
      <button onClick={onClose}>Close</button>
    </div>
  );
};