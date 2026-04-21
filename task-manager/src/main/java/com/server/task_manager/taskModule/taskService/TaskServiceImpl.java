package com.server.task_manager.taskModule.taskService;
import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskConvertor.TaskConvertor;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.taskModule.taskRepository.TaskRepository;


@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskConvertor taskConvertor;
    private final RestTemplate restTemplate;
    public TaskServiceImpl(TaskRepository taskRepository, TaskConvertor taskConvertor, RestTemplate restTemplate) {
        this.taskRepository = taskRepository;
        this.taskConvertor = taskConvertor;
        this.restTemplate = restTemplate;
    }

    @Override
    public TaskEntity createTask(TaskBoundary taskBoundary) {
        TaskEntity taskEntity = taskConvertor.convertToTaskEntity(taskBoundary);
        taskEntity=taskRepository.save(taskEntity);
        return taskEntity;              
    }

    @Override
    public TaskEntity getTaskById(String taskId) {
        return taskRepository.findById(taskId);
    }

    @Override
    public TaskEntity updateTask(String taskId, TaskBoundary taskBoundary) {
        TaskEntity existingTask = taskRepository.findById(taskId);
        return taskRepository.save(existingTask);
    }

    @Override
    public void deleteTask(String taskId) {
        taskRepository.deleteById(taskId);
    }

    @Override
    public List<TaskEntity> getTasksByStatus(TaskStatus status) {
        /*return taskRepository.findAll().stream()
                .filter(task -> task.getStatus() == status)
                .toList();
        */
        return taskRepository.findByStatus(status);
    }

    @Override
    public List<TaskEntity> getTasksByPriority(TaskPriority priority) {
        /*return taskRepository.findAll().stream()
                .filter(task -> task.getPriority() == priority)
                .toList();
        */
        return taskRepository.findByPriority(priority);
    }

    @Override
    public List<TaskEntity> getTasksByDueDate(Date dueDate) {
        /*return taskRepository.findAll().stream()
                .filter(task -> task.getDueDate() == dueDate)
                .toList();
        */
        return taskRepository.findByDueDate(dueDate);
    }

    @Override
    public TaskEntity updateTaskStatus(String taskId, TaskStatus status) {
        TaskEntity taskEntity = taskRepository.findById(taskId);
        taskEntity.setStatus(status);
        return taskRepository.save(taskEntity);
    }

    @Override
    public List<TaskEntity> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteAllTasks() {
        taskRepository.deleteAll();
    }
    
}
