import type { TaskBoundary, TaskPriority, TaskStatus } from "../api/interfaces/taskService";
import type { UserSearchResult } from "../api/interfaces/userService";
type FiltersProps = {
  priority: TaskPriority[];
  status: TaskStatus[];
  selectedPriority: TaskPriority | "ALL";
  selectedStatus: TaskStatus | "ALL";
  selectedDueDate: string;
  onPriorityChange: (value: TaskPriority | "ALL") => void;
  onStatusChange: (value: TaskStatus | "ALL") => void;
  onDueDateChange: (value: string) => void;
};

export const Filters = ({
  priority,
  status,
  selectedPriority,
  selectedStatus,
  selectedDueDate,
  onPriorityChange,
  onStatusChange,
  onDueDateChange,
}: FiltersProps) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
    <select
      value={selectedPriority}
      onChange={(e) => onPriorityChange(e.target.value as TaskPriority | "ALL")}
    >
      <option value="ALL">All Priorities</option>
      {priority.map((p) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>

    <select
      value={selectedStatus}
      onChange={(e) => onStatusChange(e.target.value as TaskStatus | "ALL")}
    >
      <option value="ALL">All Status</option>
      {status.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>

    <div>
      <label>Due Date</label>
      <br />
      <input
        type="date"
        value={selectedDueDate}
        onChange={(e) => onDueDateChange(e.target.value)}
      />
      <button type="button" onClick={() => onDueDateChange("")}>
        Clear
      </button>
    </div>

  </div>
);

type EditFormData = {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  userId: string;
};

type TaskCardProps = {
  task: TaskBoundary;
  priority: TaskPriority[];
  status: TaskStatus[];
  userNameById: Record<string, string>;
  isEditing: boolean;
  editForm: EditFormData | null;
  editUserQuery: string;
  editUserOptions: UserSearchResult[];
  onEditQueryChange: (value: string) => void;
  onEditUserSelect: (user: UserSearchResult) => void;

  onEdit: (task: TaskBoundary) => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;

  onEditFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;

  onQuickStatusChange: (task: TaskBoundary, newStatus: TaskStatus) => void;

  saving?: boolean;
};

export const TaskCard = ({
  task,
  priority,
  status,
  isEditing,
  editForm,
  onEdit,
  onCancelEdit,
  onSaveEdit,
  onEditFormChange,
  onQuickStatusChange,
  saving = false,
  userNameById,
  editUserQuery,
  editUserOptions,
  onEditQueryChange,
  onEditUserSelect,
}: TaskCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: isEditing ? "#fff8e1" : "white",
      }}
    >
      {isEditing && editForm ? (
        <>
          <h4 style={{ marginTop: 0 }}>Edit Task</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <label>Title</label>
              <br />
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={onEditFormChange}
              />
            </div>

            <div>
              <label>Description</label>
              <br />
              <textarea
                name="description"
                value={editForm.description}
                onChange={onEditFormChange}
              />
            </div>

            <div>
              <label>Priority</label>
              <br />
              <select
                name="priority"
                value={editForm.priority}
                onChange={onEditFormChange}
              >
                {priority.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Status</label>
              <br />
              <select
                name="status"
                value={editForm.status}
                onChange={onEditFormChange}
              >
                {status.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Due Date</label>
              <br />
              <input
                type="date"
                name="dueDate"
                value={editForm.dueDate}
                onChange={onEditFormChange}
              />
            </div>
            <div>
              <label>Responsible User</label>
              <br />
              <input
                type="text"
                value={editUserQuery}
                onChange={(e) => onEditQueryChange(e.target.value)}
                placeholder="Search by first name / last name / full name"
              />

              {editUserOptions.length > 0 && (
                <div style={{ border: "1px solid #ccc", marginTop: 8, padding: 8 }}>
                  {editUserOptions.map((user) => (
                    <div key={user.id} style={{ marginBottom: 8 }}>
                      <button type="button" onClick={() => onEditUserSelect(user)}>
                        {user.firstName} {user.lastName}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button type="button" onClick={onSaveEdit} disabled={saving}>
              {saving ? "Saving..." : "Submit"}
            </button>

            <button type="button" onClick={onCancelEdit}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h4 style={{ marginTop: 0 }}>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>

          <div style={{ marginBottom: 8 }}>
            <label>Status: </label>
            <select
              value={task.status}
              onChange={(e) =>
                onQuickStatusChange(task, e.target.value as TaskStatus)
              }
            >
              {status.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Responsible User: {userNameById[task.userId] || task.userId}</p>
          <button type="button" onClick={() => onEdit(task)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export const EditModal = () => null;