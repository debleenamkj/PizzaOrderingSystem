package com.niit.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PizzaOrder {

    String pizzaid;
    String pizzaname;
    String pizzasize;
    String price;
    String imageurl;
}
