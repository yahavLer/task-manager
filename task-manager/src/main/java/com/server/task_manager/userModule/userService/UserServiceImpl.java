package com.server.task_manager.userModule.userService;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.server.task_manager.userModule.userBoundary.UserBoundary;
import com.server.task_manager.userModule.userConvertor.UserConvertor;
import com.server.task_manager.userModule.userEntity.UserEntity;
import com.server.task_manager.userModule.userRepository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserConvertor userConvertor;
    private final RestTemplate restTemplate;
    public UserServiceImpl(UserRepository userRepository, UserConvertor userConvertor, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.userConvertor = userConvertor;
        this.restTemplate = restTemplate;
    }

    @Override
    public UserEntity createUser(UserBoundary userBoundary) {
        validationInput(userBoundary);
        UserEntity userEntity = userConvertor.convertToUserEntity(userBoundary);
        userEntity=userRepository.save(userEntity);
        return userEntity;
    }

    @Override
    public UserEntity getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public UserEntity updateUser(String userId, UserBoundary userBoundary) {
        UserEntity existingUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        validationInput(userBoundary);
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(String userId) {

        if(!userRepository.findById(userId).isPresent()) {
            throw new RuntimeException("User not found");
        }
        UserEntity existingUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(existingUser);
    }

    private void validationInput(UserBoundary userBoundary) {
        if (userBoundary.getId() == null || userBoundary.getId().isEmpty()) {
            throw new IllegalArgumentException("User ID cannot be null or empty");
        }
        if (userBoundary.getEmail() == null || userBoundary.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        if (userBoundary.getFirstName() == null || userBoundary.getFirstName().isEmpty()) {
            throw new IllegalArgumentException("First name cannot be null or empty");
        }
        if (userBoundary.getLastName() == null || userBoundary.getLastName().isEmpty()) {
            throw new IllegalArgumentException("Last name cannot be null or empty");
        }
    }
}
