package com.server.task_manager.taskModule.taskConvertor;
import org.springframework.stereotype.Component;

import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.taskModule.taskBoundary.TaskResponse;

@Component
public class TaskConvertor {
    public TaskEntity convertToTaskEntity(TaskBoundary taskBoundary) {
        TaskEntity task = new TaskEntity();
        task.setTitle(taskBoundary.getTitle());
        task.setDescription(taskBoundary.getDescription());
        task.setStatus(taskBoundary.getStatus());
        task.setPriority(taskBoundary.getPriority());
        task.setDueDate(taskBoundary.getDueDate());
        return task;
    }
    public TaskBoundary convertToTaskBoundary(TaskEntity taskEntity) {
        TaskBoundary taskBoundary = new TaskBoundary();
        taskBoundary.setTitle(taskEntity.getTitle());
        taskBoundary.setDescription(taskEntity.getDescription());
        taskBoundary.setStatus(taskEntity.getStatus());
        taskBoundary.setPriority(taskEntity.getPriority());
        taskBoundary.setDueDate(taskEntity.getDueDate());
        return taskBoundary;    
    }
    public TaskResponse convertToTaskResponse(TaskEntity taskEntity) {
        TaskResponse taskResponse = new TaskResponse();
        taskResponse.setId(taskEntity.getId());
        taskResponse.setTitle(taskEntity.getTitle());
        taskResponse.setDescription(taskEntity.getDescription());
        taskResponse.setStatus(taskEntity.getStatus());
        taskResponse.setPriority(taskEntity.getPriority());
        taskResponse.setDueDate(taskEntity.getDueDate());
        taskResponse.setUserId(taskEntity.getUser().getId());
        return taskResponse;
    }


}
