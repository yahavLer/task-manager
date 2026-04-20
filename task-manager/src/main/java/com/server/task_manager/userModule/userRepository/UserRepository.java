package com.server.task_manager.userModule.userRepository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.task_manager.userModule.userEntity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, UUID>{

    Optional<UserEntity> findById(String userId);


}
