package com.niit.service;

import com.niit.exception.PizzaNotFoundException;
import com.niit.model.Pizza;
import com.niit.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService{

    @Autowired
    PizzaRepository pizzaRepository;

    @Override
    public List<Pizza> getAllPizza() {
        return pizzaRepository.findAll();
    }

    @Override
    public Pizza postNewPizza(Pizza pizza) {
        return pizzaRepository.save(pizza);
    }

    @Override
    public Pizza deleteAPizza(String pizzaid) throws PizzaNotFoundException {
        if(pizzaRepository.findById(pizzaid).isEmpty()){
            throw new PizzaNotFoundException();
        }
        Pizza pizza1 = pizzaRepository.findById(pizzaid).get();
        pizzaRepository.delete(pizza1);
        return pizza1;
    }

    @Override
    public Pizza updateAPizza(Pizza pizza) throws PizzaNotFoundException {
        if(pizzaRepository.findById(pizza.getPizzaid()).isEmpty()){
            throw new PizzaNotFoundException();
        }
        Pizza pizza1 = pizzaRepository.findById(pizza.getPizzaid()).get();
        return pizzaRepository.save(pizza);
    }
}
