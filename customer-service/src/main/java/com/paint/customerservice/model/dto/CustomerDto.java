package com.paint.customerservice.model.dto;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class CustomerDto {
    String firstName;
    String secondName;
    String email;
    String login;
    String password;
    boolean active;
    boolean status;
    //TODO: add address
}
