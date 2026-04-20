package com.server.task_manager.userModule.userBoundary;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
}
