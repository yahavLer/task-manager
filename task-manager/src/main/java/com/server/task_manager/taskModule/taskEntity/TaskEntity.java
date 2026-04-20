package com.server.task_manager.taskModule.taskEntity;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import java.util.Date;

import org.springframework.data.annotation.Id;

import jakarta.persistence.*;

import lombok.*;


@Entity
@Table(name = "tasks")
@Getter
@Setter

public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    private Date dueDate;
    private String userId;    
}
