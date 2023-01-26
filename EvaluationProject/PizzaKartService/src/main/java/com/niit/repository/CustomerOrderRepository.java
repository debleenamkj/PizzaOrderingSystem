package com.niit.repository;

import com.niit.model.CustomerOrder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderRepository extends MongoRepository<CustomerOrder,String> {
}
