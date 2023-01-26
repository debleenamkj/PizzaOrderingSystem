package com.niit.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND, reason="Pizza not found")
public class PizzaNotFoundException extends Exception{
}
