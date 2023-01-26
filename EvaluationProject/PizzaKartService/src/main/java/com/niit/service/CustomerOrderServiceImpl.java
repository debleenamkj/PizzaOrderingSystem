package com.niit.service;

import com.niit.exception.CustomerNotFoundException;
import com.niit.model.CustomerOrder;
import com.niit.model.PizzaOrder;
import com.niit.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CustomerOrderServiceImpl implements CustomerOrderService{

    @Autowired
    CustomerOrderRepository customerOrderRepository;

    @Override
    public CustomerOrder saveCustomerPizza(String emailid, PizzaOrder pizzaOrders) {
        if(customerOrderRepository.findById(emailid).isEmpty()){
            CustomerOrder customerOrder = new CustomerOrder(emailid, Collections.singletonList(pizzaOrders));
            return customerOrderRepository.save(customerOrder);
        }
        else{
            CustomerOrder customerOrder1 = customerOrderRepository.findById(emailid).get();
            customerOrder1.getPizzaOrders().add(pizzaOrders);
            return customerOrderRepository.save(customerOrder1);
        }
    }

    @Override
    public List<PizzaOrder> getAllPizzaOfACustomer(String emailid) throws CustomerNotFoundException {
        if(customerOrderRepository.findById(emailid).get()==null){
            throw new CustomerNotFoundException();
        }
        CustomerOrder customerOrder = customerOrderRepository.findById(emailid).get();
        List<PizzaOrder> pizzaOrderList = customerOrder.getPizzaOrders();
        return pizzaOrderList;
    }

    @Override
    public CustomerOrder deleteAPizzaFromKart(PizzaOrder pizzaOrder, String emailid) throws CustomerNotFoundException {
        if(customerOrderRepository.findById(emailid).isEmpty()){
            throw new CustomerNotFoundException();
        }
        CustomerOrder customerOrder = customerOrderRepository.findById(emailid).get();
        List<PizzaOrder> pizzaOrderList = customerOrder.getPizzaOrders();
        pizzaOrderList.remove(pizzaOrder);
        customerOrder.setPizzaOrders(pizzaOrderList);
        customerOrderRepository.save(customerOrder);
        return customerOrder;
    }
}
