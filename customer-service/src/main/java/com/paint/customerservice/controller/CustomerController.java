package com.paint.customerservice.controller;

import java.util.List;


import com.paint.customerservice.model.Customer;
import com.paint.customerservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<Customer>> getAllActiveCustomers(){
        List<Customer> response = customerService.findAllActiveCustomers();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public Customer getActiveCustomer(@PathVariable Long customerId){
        return customerService.findActiveCustomerById(customerId);
    }
}
