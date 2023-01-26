package com.niit.service;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.Customer;
import com.niit.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepository customerRepository;

    public Customer registerCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Customer findCustomerByEmailIdAndPassword(String emailid, String password) throws CustomerNotFoundException{
        Customer customer = customerRepository.findCustomerByEmailidAndPassword(emailid, password);
        if(customer == null){
            throw new CustomerNotFoundException();
        }
        return customer;
    }
}
