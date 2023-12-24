package com.paint.customerservice.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;


@Entity
@Getter
@Setter
@Table(name="Customer")
public class Customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "customer_Id", nullable = false, unique = true)
    private Long id;

    @Column(name = "first_name")
    String firstName;
    @Column(name = "second_name")
    String secondName;
    @Column(name = "email")
    String email;
    @Column(name = "login")
    String login;
    @Column(name = "password_col")
    String password;
    @Column(name = "active_flag")
    boolean active;
    @Column(name = "status_flag")
    boolean status;

    //TODO: think about other fields
}
