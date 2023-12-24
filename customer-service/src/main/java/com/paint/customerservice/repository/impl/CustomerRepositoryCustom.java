package com.paint.customerservice.repository.impl;

import java.util.List;

import com.paint.customerservice.model.Customer;

public interface CustomerRepositoryCustom{
    List<Customer> findActiveCustomer();
}
