package com.niit.controller;

import com.niit.exception.PizzaNotFoundException;
import com.niit.model.Pizza;
import com.niit.service.PizzaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v2")
public class PizzaController {

    @Autowired
    PizzaServiceImpl pizzaService;

    @GetMapping("/getpizza")
    public List<Pizza> getAllPizza(){
        return pizzaService.getAllPizza();
    }

    @PostMapping("/postpizza")
    public Pizza postNewPizza(@RequestBody Pizza pizza){
        return pizzaService.postNewPizza(pizza);
    }

    @PutMapping("/updatepizza")
    public Pizza updateAPizza(@RequestBody Pizza pizza) throws PizzaNotFoundException {
        return pizzaService.updateAPizza(pizza);
    }

    @DeleteMapping("/deletepizza/{pizzaid}")
    public Pizza deleteAPizza(@PathVariable String pizzaid) throws PizzaNotFoundException {
        return pizzaService.deleteAPizza(pizzaid);
    }

}
