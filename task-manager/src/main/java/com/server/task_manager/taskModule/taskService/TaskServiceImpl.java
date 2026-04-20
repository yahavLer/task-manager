package com.server.task_manager.taskModule.taskService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
        return taskRepository.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    @Override
    public TaskEntity updateTask(String taskId, TaskBoundary taskBoundary) {
        TaskEntity existingTask = taskRepository.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        return taskRepository.save(existingTask);
    }

    @Override
    public void deleteTask(String taskId) {
        if(!taskRepository.findById(taskId).isPresent()) {
            throw new RuntimeException("Task not found");
        }
        TaskEntity existingTask = taskRepository.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepository.delete(existingTask);
    }
    
}
