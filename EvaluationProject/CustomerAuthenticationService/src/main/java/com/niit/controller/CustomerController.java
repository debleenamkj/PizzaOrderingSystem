package com.niit.controller;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.Customer;
import com.niit.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerServiceImpl customerService;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public Customer login(@RequestBody Customer customer) throws CustomerNotFoundException{
       String emailid = customer.getEmailid();
       String password = customer.getPassword();
       Customer customerObj = null;
       if(emailid != null && password != null){
           customerObj = customerService.findCustomerByEmailIdAndPassword(emailid,password);
       }
       if(customerObj == null){
           throw new CustomerNotFoundException();
       }
       return customerObj;
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Customer> registerCustomer(@RequestBody Customer customer){
        customerService.registerCustomer(customer);
        return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
    }

}
