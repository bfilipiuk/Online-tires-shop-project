package com.paint.customerservice.repository;

import com.paint.customerservice.model.Customer;
import com.paint.customerservice.repository.impl.CustomerRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

}
