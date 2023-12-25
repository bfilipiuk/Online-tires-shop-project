package com.paint.customerservice.controller;

import java.math.BigInteger;
import java.util.List;


import com.paint.customerservice.model.Customer;
import com.paint.customerservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService){
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAllActiveCustomers(){
        List<Customer> response = customerService.findAllActiveCustomers();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<Customer> getActiveCustomer(@PathVariable Long customerId){
        Customer response = customerService.findActiveCustomerById(customerId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer customerId, @RequestBody Customer updatedCustomer){
        Customer response = customerService.updateCustomer(customerId, updatedCustomer);
        return ResponseEntity.ok(response);
    }

}
