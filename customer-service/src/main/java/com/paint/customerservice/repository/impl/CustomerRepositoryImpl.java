package com.paint.customerservice.repository.impl;

import java.util.List;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.paint.customerservice.model.Customer;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class CustomerRepositoryImpl implements CustomerRepositoryCustom {

    @PersistenceContext
    EntityManager entityManager;

    private static final String SELECT_ALL_CUSTOMERS = "SELECT c FROM Customer c WHERE c.active= true AND c.status = true";

    private static final String SELECT_ALL_ACTIVE_CUSTOMERS = "SELECT c FROM Customer c WHERE c.active= true AND c.status = true and c.id = :id";

    private static final String UPDATE = "UPDATE Customer c SET ";

    @Override
    public List<Customer> findActiveCustomer() {
        TypedQuery<Customer> query = entityManager.createQuery(SELECT_ALL_CUSTOMERS, Customer.class);
        return query.getResultList();
    }

    @Override
    public Customer findActiveCustomerById(Long id){
        TypedQuery<Customer> query = entityManager.createQuery(SELECT_ALL_ACTIVE_CUSTOMERS, Customer.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    @Override
    @Transactional
    public Customer updateCustomer(Long customerId, Customer updatedCustomer){
        StringBuilder jpqlBuilder = new StringBuilder(UPDATE);

        if (updatedCustomer.getFirstName() != null) {
            jpqlBuilder.append("c.firstName = :firstName, ");
        }
        if (updatedCustomer.getSecondName() != null) {
            jpqlBuilder.append("c.secondName = :secondName, ");
        }
        if (updatedCustomer.getEmail() != null) {
            jpqlBuilder.append("c.email = :email, ");
        }
        if (updatedCustomer.getLogin() != null) {
            jpqlBuilder.append("c.login = :login, ");
        }
        int lastCommaIndex = jpqlBuilder.lastIndexOf(",");
        if (lastCommaIndex >= 0) {
            jpqlBuilder.delete(lastCommaIndex, jpqlBuilder.length());
        }

        jpqlBuilder.append(" WHERE c.id = :id");

        String jpql = jpqlBuilder.toString();
        var query = entityManager.createQuery(jpql);

        if (updatedCustomer.getFirstName() != null) {
            query.setParameter("firstName", updatedCustomer.getFirstName());
        }
        if (updatedCustomer.getSecondName() != null) {
            query.setParameter("secondName", updatedCustomer.getSecondName());
        }
        if (updatedCustomer.getEmail() != null) {
            query.setParameter("email", updatedCustomer.getEmail());
        }
        if (updatedCustomer.getLogin() != null) {
            query.setParameter("login", updatedCustomer.getLogin());
        }
        query.setParameter("id", customerId);

        query.executeUpdate();

        return findActiveCustomerById(customerId);
    }
}
