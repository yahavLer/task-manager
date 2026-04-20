package com.server.task_manager.taskModule.taskController;

import org.springframework.data.convert.ReadingConverter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.task_manager.taskModule.taskConvertor.TaskConvertor;
import com.server.task_manager.taskModule.taskService.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    private final TaskConvertor taskConvertor;

    public TaskController(TaskService taskService, TaskConvertor taskConvertor) {
        this.taskService = taskService;
        this.taskConvertor = taskConvertor;
    }

}
