import { taskService, TaskPriority, TaskStatus } from "../api/interfaces/taskService";
import { useEffect, useMemo, useState } from "react";
import type { TaskBoundary } from "../api/interfaces/taskService";

type EditTaskFormData = {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  userId: string;
};

export const useTaskPage = () => {
  const [tasks, setTasks] = useState<TaskBoundary[]>([]);

  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | "ALL">("ALL");
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "ALL">("ALL");

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<EditTaskFormData | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await taskService.getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const priorityOk =
        selectedPriority === "ALL" || t.priority === selectedPriority;

      const statusOk =
        selectedStatus === "ALL" || t.status === selectedStatus;

      return priorityOk && statusOk;
    });
  }, [tasks, selectedPriority, selectedStatus]);

  function startEdit(task: TaskBoundary) {
    setEditingTaskId(task.id);

    setEditForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: new Date(task.dueDate).toISOString().slice(0, 10),
      userId: task.userId,
    });
  }

  function cancelEdit() {
    setEditingTaskId(null);
    setEditForm(null);
  }

  function onEditFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setEditForm((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      } as EditTaskFormData;
    });
  }

  async function saveEdit() {
    if (!editingTaskId || !editForm) return;

    setSaving(true);

    try {
      const payload: TaskBoundary = {
        id: editingTaskId,
        title: editForm.title,
        description: editForm.description,
        priority: editForm.priority,
        status: editForm.status,
        dueDate: new Date(editForm.dueDate),
        userId: editForm.userId,
      };

      const updatedTask = await taskService.updateTask(editingTaskId, payload);

      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );

      cancelEdit();
    } catch (error) {
      console.error("Error saving task:", error);
    } finally {
      setSaving(false);
    }
  }

  async function changeTaskStatus(task: TaskBoundary, newStatus: TaskStatus) {
    try {
      const updatedTask = await taskService.updateTaskStatus(task.id, newStatus);
      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  }

  return {
    priority: Object.values(TaskPriority) as TaskPriority[],
    status: Object.values(TaskStatus) as TaskStatus[],
    selectedPriority,
    selectedStatus,
    setSelectedPriority,
    setSelectedStatus,
    filteredTasks,

    editingTaskId,
    editForm,
    saving,

    startEdit,
    cancelEdit,
    onEditFormChange,
    saveEdit,
    changeTaskStatus,
  };
};