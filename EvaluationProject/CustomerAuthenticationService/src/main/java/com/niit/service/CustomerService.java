package com.niit.service;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.Customer;

public interface CustomerService {

    public Customer registerCustomer(Customer customer);
    public Customer findCustomerByEmailIdAndPassword(String emailid, String password) throws CustomerNotFoundException;
}
