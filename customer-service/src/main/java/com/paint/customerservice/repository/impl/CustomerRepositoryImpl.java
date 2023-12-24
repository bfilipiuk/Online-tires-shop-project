package com.paint.customerservice.repository.impl;


import java.util.List;

import com.paint.customerservice.model.Customer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepositoryImpl implements CustomerRepositoryCustom {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Customer> findActiveCustomer() {
        TypedQuery<Customer> query = entityManager.createQuery(
                "SELECT c FROM Customer c WHERE c.active= true AND c.status = true",
                Customer.class
        );
        return query.getResultList();
    }

}
