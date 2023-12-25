package com.paint.customerservice.customerRepository;

import com.paint.customerservice.model.Customer;
import com.paint.customerservice.repository.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import java.math.BigInteger;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringJUnitConfig
@SpringBootTest
@ActiveProfiles("Test")
@Sql(scripts = "classpath:customer/insert-customer.sql", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_CLASS)
public class CustomerRepositoryTest {

    @Autowired
    CustomerRepository customerRepository;

    @Test
    public void findAllActiveCustomers() {
        List<Customer> result = customerRepository.findActiveCustomer();
        assertThat(result).singleElement().satisfies(dto -> {
            assertThat(dto.getId()).isEqualTo(1);
            assertThat(dto.getFirstName()).isEqualTo("John");
            assertThat(dto.getSecondName()).isEqualTo("Doe");
        });
    }

    @Test
    public void givenCustomerId_whenFindActiveCustomerById_thenExpected() {
        //given
        Long customerId = 1L;

        //when
        Customer result = customerRepository.findActiveCustomerById(customerId);

        //then
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getFirstName()).isEqualTo("John");
        assertThat(result.getSecondName()).isEqualTo("Doe");
    }
}
