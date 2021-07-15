package com.loan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.Exceptions.CustomerNotFoundException;
import com.loan.entity.Customer;
import com.loan.entity.LoanApplication;
import com.loan.repository.CustomerRepository;

@Service
public class CustomerService 
{
	
	  @Autowired
      private CustomerRepository customerRepo;
	  
	  public Customer addCustomer(Customer customer)
	  {
		  Customer addCutomer=customerRepo.save(customer);
		  if(null!=addCutomer)
		  {
			  return addCutomer;
		  }
		  
		   return null;
	  }
	  
	  public List<Customer> addCustomers(List<Customer> customers)
	  {
		  List<Customer> addCutomers=customerRepo.saveAll(customers);
		  if(null!=addCutomers)
		  {
			  return addCutomers;
		  }
		  
		   return null;
	  }
	  
	  
	  public Customer getCustomer(int id)  throws CustomerNotFoundException
	  {
		  Optional<Customer> optinal= customerRepo.findById(id);
		  try {
			  if(optinal.isPresent()) {
				  customerRepo.findById(id);
				  
			  }else {
				  throw new CustomerNotFoundException("Customer not found with the matchinfg ID  ");
			  }
		  }catch(Exception e) {
			  throw new CustomerNotFoundException("Customer not found with the matchinfg ID  ");
		  }
		  return optinal.get();
		
	  }
	  
	  
	  public List<Customer> getAllCustomer()
	  {
		  List<Customer> customerList = customerRepo.findAll();
		  if(null!=customerList)
		  {
		    return customerList;
		  }
		  return null;
	  }
	
	@Transactional
	  public Customer updateCustomer(Customer customer) throws CustomerNotFoundException
	  {
		  Optional<Customer> optional = customerRepo.findById(customer.getCustomerId());
		  if(optional.isPresent())
		  {
			  customerRepo.save(customer);
			  return optional.get();
		  }
		  else
		  {
			  throw new CustomerNotFoundException("Customer cant be Updated");
		  }
		  
	  }
	  @Transactional
	  public String deleteById(int id)
	  {
		  customerRepo.deleteById(id);
		  return "Customer removed from DataBase";
	  }
}
