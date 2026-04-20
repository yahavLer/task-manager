package com.server.task_manager.userModule.userController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    

}
