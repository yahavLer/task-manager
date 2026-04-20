package com.server.task_manager.taskModule.taskBoundary;

import java.util.Date;

import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;

public class TaskBoundary {
    private String id;
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private Date dueDate;
    private String userId;

    public String getId() {
        return id;
    }

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

    public Date getDueDate() {
        return dueDate;
    }

    public String getUserId() {
        return userId;
    }
    public void setId(String id) {
        this.id = id;
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
    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
}
