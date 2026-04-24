package com.server.task_manager.taskModule.taskController;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskBoundary.TaskResponse;
import com.server.task_manager.taskModule.taskConvertor.TaskConvertor;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.taskModule.taskService.TaskService;
import com.server.task_manager.taskModule.enums.TaskPriority;
import com.server.task_manager.taskModule.enums.TaskStatus;
import java.time.LocalDate;
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    private final TaskConvertor taskConvertor;
    private final RestTemplate restTemplate;

    public TaskController(TaskService taskService, TaskConvertor taskConvertor, RestTemplate restTemplate) {
        this.taskService = taskService;
        this.taskConvertor = taskConvertor;
        this.restTemplate = restTemplate;
    }
    @PostMapping("/create")
    public ResponseEntity<TaskResponse> createTask(@RequestBody TaskBoundary taskBoundary) {
        TaskEntity taskEntity = taskService.createTask(taskBoundary);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(taskEntity);
        return ResponseEntity.ok(taskResponse);
    }

    @GetMapping("/get/{taskId}")
    public ResponseEntity<TaskResponse> getTaskById(@RequestParam String taskId) {
        TaskEntity taskEntity = taskService.getTaskById(taskId);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(taskEntity);
        return ResponseEntity.ok(taskResponse);
    }

    @PutMapping("/update/{taskId}")
    public ResponseEntity<TaskResponse> updateTask(@PathVariable String taskId, @RequestBody TaskBoundary taskBoundary) {
        TaskEntity updatedTaskEntity = taskService.updateTask(taskId, taskBoundary);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(updatedTaskEntity);
        return ResponseEntity.ok(taskResponse); 
    }

    @DeleteMapping("/delete/{taskId}")
    public ResponseEntity<String> deleteTask(@RequestParam String taskId) {
        taskService.deleteTask(taskId);
        return ResponseEntity.ok("Task deleted successfully");
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<String> deleteAllTasks() {
        return ResponseEntity.ok("All tasks deleted successfully");
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<TaskResponse>> getAllTasks() {
        List<TaskEntity> taskEntities = taskService.getAllTasks();
        List<TaskResponse> taskResponses = taskEntities.stream()
                .map(taskConvertor::convertToTaskResponse)
                .toList();
        return ResponseEntity.ok(taskResponses);
    }

    @GetMapping("/getTaskByStatus")
    public ResponseEntity<List<TaskResponse>> getTasksByStatus(@RequestParam TaskStatus status) {
        List<TaskEntity> taskEntities = taskService.getTasksByStatus(status);
        List<TaskResponse> taskResponses = taskEntities.stream()
                .map(taskConvertor::convertToTaskResponse)
                .toList();
        return ResponseEntity.ok(taskResponses);
    }

    @GetMapping("/getTaskByPriority")
    public ResponseEntity<List<TaskResponse>> getTasksByPriority(@RequestParam TaskPriority priority) {
        List<TaskEntity> taskEntities = taskService.getTasksByPriority(priority);
        List<TaskResponse> taskResponses = taskEntities.stream()
                .map(taskConvertor::convertToTaskResponse)
                .toList();
        return ResponseEntity.ok(taskResponses);
    }

    @GetMapping("/getTaskByDueDate")
    public ResponseEntity<List<TaskResponse>> getTasksByDueDate(@RequestParam LocalDate dueDate) {
        List<TaskEntity> taskEntities = taskService.getTasksByDueDate(dueDate);
        List<TaskResponse> taskResponses = taskEntities.stream()
                .map(taskConvertor::convertToTaskResponse)
                .toList();
        return ResponseEntity.ok(taskResponses);
    }


    @PutMapping("/updateStatus/{taskId}/status/{status}")
    public ResponseEntity<TaskResponse> updateTaskStatus(@PathVariable String taskId, @PathVariable TaskStatus status) {
        TaskEntity updatedTaskEntity = taskService.updateTaskStatus(taskId, status);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(updatedTaskEntity);
        return ResponseEntity.ok(taskResponse);
    }

}