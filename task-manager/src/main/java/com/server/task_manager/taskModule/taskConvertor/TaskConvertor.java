package com.server.task_manager.taskModule.taskConvertor;
import java.util.Date;
import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;

public class TaskConvertor {
    public TaskEntity convertToTask(TaskBoundary taskBoundary) {
        TaskEntity task = new TaskEntity();
        task.setId(taskBoundary.getId());
        task.setTitle(taskBoundary.getTitle());
        task.setDescription(taskBoundary.getDescription());
        task.setStatus(taskBoundary.getStatus());
        task.setDueDate(taskBoundary.getDueDate());
        return task;
    }
    public TaskBoundary convertToTaskBoundary(TaskEntity taskEntity) {
        TaskBoundary taskBoundary = new TaskBoundary();
        taskBoundary.setId(taskEntity.getId());
        taskBoundary.setTitle(taskEntity.getTitle());
        taskBoundary.setDescription(taskEntity.getDescription());
        taskBoundary.setStatus(taskEntity.getStatus());
        taskBoundary.setDueDate(taskEntity.getDueDate());
        return taskBoundary;    
    }


}
