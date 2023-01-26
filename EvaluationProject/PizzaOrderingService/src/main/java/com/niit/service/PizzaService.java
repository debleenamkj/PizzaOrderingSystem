package com.niit.service;

import com.niit.exception.PizzaNotFoundException;
import com.niit.model.Pizza;

import java.util.List;

public interface PizzaService {

    public List<Pizza> getAllPizza();

    public Pizza postNewPizza(Pizza pizza);

    public Pizza deleteAPizza(String pizzaid) throws PizzaNotFoundException;

    public Pizza updateAPizza(Pizza pizza) throws PizzaNotFoundException;
}
