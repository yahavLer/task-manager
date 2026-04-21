package com.server.task_manager.taskModule.taskService;

import java.util.List;

import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import java.util.Date;

public interface TaskService {
    TaskEntity createTask(TaskBoundary taskBoundary);
    TaskEntity getTaskById(String taskId);
    TaskEntity updateTask(String taskId, TaskBoundary taskBoundary);
    void deleteTask(String taskId);   
    List<TaskEntity> getTasksByStatus(TaskStatus status);
    List<TaskEntity> getTasksByPriority(TaskPriority priority);
    List<TaskEntity> getTasksByDueDate(Date dueDate);
    TaskEntity updateTaskStatus(String taskId, TaskStatus status);
    List<TaskEntity> getAllTasks();
    void deleteAllTasks();
} 