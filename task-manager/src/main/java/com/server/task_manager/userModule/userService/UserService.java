package com.server.task_manager.userModule.userService;

import java.util.List;

import com.server.task_manager.userModule.userBoundary.UserBoundary;
import com.server.task_manager.userModule.userEntity.UserEntity;

public interface UserService {
    UserEntity createUser(UserBoundary userBoundary);
    UserEntity getUserById(String userId);
    UserEntity updateUser(String userId, UserBoundary userBoundary);
    void deleteUser(String userId);
    List<UserEntity> getAllUsers();
    void deleteAllUsers();
    List<UserEntity> searchUsers(String query);
}
