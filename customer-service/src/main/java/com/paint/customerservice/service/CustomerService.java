package com.paint.customerservice.service;

import java.util.List;


import com.paint.customerservice.model.Customer;
import com.paint.customerservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> findAllActiveCustomers(){
        return customerRepository.findActiveCustomer();
    }

    public Customer findActiveCustomerById(Long customerId){
        return customerRepository.findActiveCustomerById(customerId);
    }

}
