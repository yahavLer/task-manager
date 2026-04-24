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
  const [selectedDueDate, setSelectedDueDate] = useState("");

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<EditTaskFormData | null>(null);
  const [saving, setSaving] = useState(false);

    useEffect(() => {
    const fetchTasks = async () => {
      try {
        let tasksData: TaskBoundary[] = [];

        if (selectedStatus !== "ALL") {
          tasksData = await taskService.getTasksByStatus(selectedStatus);
        } else if (selectedPriority !== "ALL") {
          tasksData = await taskService.getTasksByPriority(selectedPriority);
        } else if (selectedDueDate!== "") {
          tasksData = await taskService.getTasksByDueDate(selectedDueDate);
        } else {
          tasksData = await taskService.getAllTasks();
        }

        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [selectedPriority, selectedStatus, selectedDueDate]);

  function handlePriorityChange(value: TaskPriority | "ALL") {
    setSelectedPriority(value);
    setSelectedStatus("ALL");
    setSelectedDueDate("");
  }

  function handleStatusChange(value: TaskStatus | "ALL") {
    setSelectedStatus(value);
    setSelectedPriority("ALL");
    setSelectedDueDate("");
  }

  function handleDueDateChange(value: string) {
    setSelectedDueDate(value);
    setSelectedPriority("ALL");
    setSelectedStatus("ALL");
  }

  function startEdit(task: TaskBoundary) {
    setEditingTaskId(task.id);

    setEditForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
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
        dueDate: editForm.dueDate,
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
    selectedDueDate,
    setSelectedPriority: handlePriorityChange,
    setSelectedStatus: handleStatusChange,
    setSelectedDueDate: handleDueDateChange,
    filteredTasks: tasks,

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