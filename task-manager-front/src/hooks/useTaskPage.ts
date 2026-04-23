import { taskService } from "../api/interfaces/taskService";
import { useEffect, useMemo, useState } from "react";
import type { TaskBoundary, TaskPriority, TaskStatus } from "../api/interfaces/taskService";

export const useTaskPage = () => {
  const [tasks, setTasks] = useState<TaskBoundary[]>([]);

  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | "ALL">("ALL");
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "ALL">("ALL");

  const [selectedTask, setSelectedTask] = useState<TaskBoundary | null>(null);

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
      const priorityOk = selectedPriority === "ALL" || t.priority === selectedPriority;
      const statusOk = selectedStatus === "ALL" || t.status === selectedStatus;

      return priorityOk && statusOk;
    });
  }, [tasks, selectedPriority, selectedStatus]);

  return {
    priority: ["LOW", "MEDIUM", "HIGH"] as TaskPriority[],
    status: ["PENDING", "IN_PROGRESS", "DONE"] as TaskStatus[],
    selectedPriority,
    selectedStatus,
    setSelectedPriority,
    setSelectedStatus,
    filteredTasks,
    selectedTask,
    setSelectedTask,
  };
};