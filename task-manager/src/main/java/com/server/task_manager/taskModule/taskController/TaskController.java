package com.server.task_manager.taskModule.taskController;
import org.apache.catalina.User;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.*;
import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskBoundary.TaskResponse;
import com.server.task_manager.taskModule.taskConvertor.TaskConvertor;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.taskModule.taskService.TaskService;
import com.server.task_manager.userModule.userEntity.UserEntity;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    private final TaskConvertor taskConvertor;

    public TaskController(TaskService taskService, TaskConvertor taskConvertor) {
        this.taskService = taskService;
        this.taskConvertor = taskConvertor;
    }
    @PostMapping("/create")
    public ResponseEntity<TaskResponse> createTask(@RequestBody TaskBoundary taskBoundary) {
        TaskEntity taskEntity = taskService.createTask(taskBoundary);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(taskEntity);
        return ResponseEntity.ok(taskResponse);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<TaskResponse> getTaskById(@PathVariable String taskId) {
        TaskEntity taskEntity = taskService.getTaskById(taskId);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(taskEntity);
        return ResponseEntity.ok(taskResponse);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TaskResponse> updateTask(@PathVariable String taskId, @RequestBody TaskBoundary taskBoundary) {
        TaskEntity updatedTaskEntity = taskService.updateTask(taskId, taskBoundary);
        TaskResponse taskResponse = taskConvertor.convertToTaskResponse(updatedTaskEntity);
        return ResponseEntity.ok(taskResponse); 
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable String taskId) {
        taskService.deleteTask(taskId);
        return ResponseEntity.ok("Task deleted successfully");
    }

}
