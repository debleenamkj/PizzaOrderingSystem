package com.niit.controller;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.CustomerOrder;
import com.niit.model.PizzaOrder;
import com.niit.service.CustomerOrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v3")
public class CustomerOrderController {

    @Autowired
    CustomerOrderServiceImpl customerOrderService;

    @PostMapping("/savepizzatokart/{emailid}")
    public CustomerOrder savePizzaToKart(@RequestBody PizzaOrder pizzaOrder, @PathVariable String emailid){
        return customerOrderService.saveCustomerPizza(emailid, pizzaOrder);
    }

    @GetMapping("/getpizzafromkart/{emailid}")
    public List<PizzaOrder> getAllPizzaOfACustomer(@PathVariable String emailid) throws CustomerNotFoundException {
        return customerOrderService.getAllPizzaOfACustomer(emailid);
    }

    @PostMapping("/deletepizzafromkart/{emailid}")
    public CustomerOrder deletePizzaFromKart(@RequestBody PizzaOrder pizzaOrder, @PathVariable String emailid) throws CustomerNotFoundException {
        return customerOrderService.deleteAPizzaFromKart(pizzaOrder,emailid);
    }
}
