package com.niit.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Pizza {

    @Id
    String pizzaid;
    String pizzaname;
    String pizzasize;
    String price;
    String imageurl;

}
