package com.server.task_manager.userModule.userConvertor;


import org.springframework.stereotype.Component;

import com.server.task_manager.userModule.userBoundary.UserBoundary;
import com.server.task_manager.userModule.userEntity.UserEntity;
import com.server.task_manager.userModule.userBoundary.UserResponse;

@Component
public class UserConvertor {
    public UserEntity convertToUserEntity(UserBoundary userBoundary) {
        UserEntity user = new UserEntity();
        user.setId(userBoundary.getId());
        user.setFirstName(userBoundary.getFirstName());
        user.setLastName(userBoundary.getLastName());
        user.setEmail(userBoundary.getEmail());
        user.setPhoneNumber(userBoundary.getPhoneNumber());
        user.setPassword(userBoundary.getPassword());
        return user;
    }
    public UserBoundary convertToUserBoundary(UserEntity userEntity) {
        UserBoundary userBoundary = new UserBoundary();
        userBoundary.setId(userEntity.getId());
        userBoundary.setFirstName(userEntity.getFirstName());
        userBoundary.setLastName(userEntity.getLastName());
        userBoundary.setEmail(userEntity.getEmail());
        userBoundary.setPhoneNumber(userEntity.getPhoneNumber());
        userBoundary.setPassword(userEntity.getPassword());
        return userBoundary;
    }
    public UserResponse convertToUserResponse(UserEntity userEntity) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(userEntity.getId());
        userResponse.setFirstName(userEntity.getFirstName());
        userResponse.setLastName(userEntity.getLastName());
        userResponse.setEmail(userEntity.getEmail());
        userResponse.setPhoneNumber(userEntity.getPhoneNumber());
        return userResponse;
    }
}
