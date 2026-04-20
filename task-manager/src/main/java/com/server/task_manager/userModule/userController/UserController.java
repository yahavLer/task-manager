package com.server.task_manager.userModule.userController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.task_manager.taskModule.taskBoundary.TaskBoundary;
import com.server.task_manager.taskModule.taskBoundary.TaskResponse;
import com.server.task_manager.taskModule.taskEntity.TaskEntity;
import com.server.task_manager.userModule.userConvertor.UserConvertor;
import com.server.task_manager.userModule.userService.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final UserConvertor userConvertor;

    public UserController(UserService userService, UserConvertor userConvertor) {
        this.userService = userService;
        this.userConvertor = userConvertor;
    }

    @PostMapping("/create")
    public ResponseEntity<UserResponse> createUser(@RequestBody UserBoundary userBoundary) {
        UserEntity userEntity = userService.createUser(userBoundary);
        UserResponse userResponse = userConvertor.toResponse(userEntity);
        return ResponseEntity.ok(userResponse);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable String userId) {
        UserEntity userEntity = userService.getUserById(userId);
        UserResponse userResponse = userConvertor.toResponse(userEntity);
        return ResponseEntity.ok(userResponse);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserResponse> updateUser(@PathVariable String userId, @RequestBody UserBoundary userBoundary) {
        UserEntity updatedUserEntity = userService.updateUser(userId, userBoundary);
        UserResponse userResponse = userConvertor.toResponse(updatedUserEntity);
        return ResponseEntity.ok(userResponse);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }
    

}
