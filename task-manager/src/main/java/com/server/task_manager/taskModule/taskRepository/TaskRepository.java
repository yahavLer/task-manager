package com.server.task_manager.taskModule.taskRepository;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.server.task_manager.taskModule.taskEntity.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, UUID>, JpaSpecificationExecutor<TaskEntity> {
    void deleteById(String taskId);
    TaskEntity findById(String taskId);
    List<TaskEntity> findByStatus(TaskStatus status);
    List<TaskEntity> findByPriority(TaskPriority priority);
    List<TaskEntity> findByDueDate(Date dueDate);
    void deleteAll();
}
