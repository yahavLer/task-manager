package com.server.task_manager.userModule.userRepository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.server.task_manager.userModule.userEntity.UserEntity;
import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, UUID>{

    Optional<UserEntity> findById(String userId);
    @Query("""
        SELECT u
        FROM UserEntity u
        WHERE LOWER(u.firstName) LIKE LOWER(CONCAT('%', :query, '%'))
        OR LOWER(u.lastName) LIKE LOWER(CONCAT('%', :query, '%'))
        OR LOWER(CONCAT(u.firstName, ' ', u.lastName)) LIKE LOWER(CONCAT('%', :query, '%'))
        """)
    List<UserEntity> searchUsers(@Param("query") String query);
    UserEntity findByEmailAndPassword(String email, String password);
}
