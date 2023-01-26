package com.niit.service;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.CustomerOrder;
import com.niit.model.PizzaOrder;

import java.util.List;

public interface CustomerOrderService {

    public CustomerOrder saveCustomerPizza(String emailid, PizzaOrder pizzaOrders);

    public List<PizzaOrder> getAllPizzaOfACustomer(String emailid) throws CustomerNotFoundException;

    public CustomerOrder deleteAPizzaFromKart(PizzaOrder pizzaOrder, String emailid) throws CustomerNotFoundException;
}
