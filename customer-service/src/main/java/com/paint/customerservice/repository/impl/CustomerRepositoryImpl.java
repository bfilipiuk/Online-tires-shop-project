package com.paint.customerservice.repository.impl;

import java.math.BigInteger;
import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.paint.customerservice.model.Customer;

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

    @Override
    public Customer findActiveCustomerById(Long id){
        TypedQuery<Customer> query = entityManager.createQuery(
                "SELECT c FROM Customer c WHERE c.active= true AND c.status = true and c.id = :id",
                Customer.class
        );
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    public Customer updateCustomer(Integer customerId, Customer updatedCustomer){
       try {
           Customer customer = entityManager.find(Customer.class, customerId);
           customer.setFirstName(updatedCustomer.getFirstName());
           customer.setSecondName(updatedCustomer.getSecondName());
           customer.setEmail(updatedCustomer.getEmail());
           return customer;
       } catch (RuntimeException exception){
        throw new RuntimeException("Customer not found with id " + customerId);
       }
    }
}
