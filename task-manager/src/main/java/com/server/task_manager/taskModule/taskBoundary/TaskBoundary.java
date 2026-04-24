package com.server.task_manager.taskModule.taskBoundary;

import java.time.LocalDate;

import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;

public class TaskBoundary {
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private LocalDate dueDate;
    private String userId;


    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public String getUserId() {
        return userId;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public void setDescription(String description) {
        this.description = description;    
    }
    public void setStatus(TaskStatus status) {
        this.status = status;
    }
    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }
    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
}
