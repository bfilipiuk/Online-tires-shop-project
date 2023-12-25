package com.paint.customerservice.repository.impl;

import java.math.BigInteger;
import java.util.List;

import com.paint.customerservice.model.Customer;

public interface CustomerRepositoryCustom{
    List<Customer> findActiveCustomer();
    Customer findActiveCustomerById(Long id);
    Customer updateCustomer(Integer id, Customer customer);
}
