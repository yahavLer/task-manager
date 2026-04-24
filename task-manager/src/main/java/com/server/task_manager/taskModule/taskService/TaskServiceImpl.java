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
import com.server.task_manager.userModule.userEntity.UserEntity;
import com.server.task_manager.userModule.userRepository.UserRepository;
import java.time.LocalDate;
@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskConvertor taskConvertor;
    private final UserRepository userRepository;
    private final RestTemplate restTemplate;
    public TaskServiceImpl(TaskRepository taskRepository, TaskConvertor taskConvertor, UserRepository userRepository, RestTemplate restTemplate) {
        this.taskRepository = taskRepository;
        this.taskConvertor = taskConvertor;
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
    }

    @Override
    public TaskEntity createTask(TaskBoundary taskBoundary) {
        TaskEntity taskEntity = taskConvertor.convertToTaskEntity(taskBoundary);
        UserEntity user = userRepository.findById(taskBoundary.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        taskEntity.setUser(user);
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
        existingTask.setTitle(taskBoundary.getTitle());
        existingTask.setDescription(taskBoundary.getDescription());
        existingTask.setDueDate(taskBoundary.getDueDate());
        existingTask.setPriority(taskBoundary.getPriority());
        existingTask.setStatus(taskBoundary.getStatus());
        existingTask.setUser(userRepository.findById(taskBoundary.getUserId()).orElseThrow(() -> new RuntimeException("User not found")));
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
    public List<TaskEntity> getTasksByDueDate(LocalDate dueDate) {
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
