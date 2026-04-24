package com.server.task_manager.taskModule.taskBoundary;

import java.time.LocalDate;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;

import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    private String id;
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private LocalDate dueDate;
    private String userId;
}
