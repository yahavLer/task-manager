package com.server.task_manager.taskModule.taskService;

import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;

public interface TaskService {
    TaskEntity createTask(TaskBoundary taskBoundary);
    TaskEntity getTaskById(String taskId);
    TaskEntity updateTask(String taskId, TaskBoundary taskBoundary);
    void deleteTask(String taskId);   
} 