package com.server.task_manager.taskModule.taskRepository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.task_manager.taskModule.taskEntity.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, UUID>{

    Optional<TaskEntity> findById(String taskId);


}
