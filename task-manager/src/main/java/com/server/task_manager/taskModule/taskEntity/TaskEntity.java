package com.server.task_manager.taskModule.taskEntity;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import com.server.task_manager.userModule.userEntity.UserEntity;

import java.util.Date;

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

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Enumerated(EnumType.STRING)
    private TaskPriority priority;
    
    private Date dueDate;
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id",nullable = false)
    private UserEntity user;   
}
