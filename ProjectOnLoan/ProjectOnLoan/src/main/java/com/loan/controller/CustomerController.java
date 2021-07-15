package com.loan.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.loan.Exceptions.CustomerNotFoundException;
import com.loan.entity.Customer;

import com.loan.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	
	
	@PostMapping(value = "/create")
	public ResponseEntity<String> addCustomer(@RequestBody Customer customer)
	{
		try {
			Customer addCustomer =customerService.addCustomer(customer);
			
			if(null!=addCustomer)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Added  customer  %s",addCustomer.toString()));
			}
			else
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("No data in DB"));
			}
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Invalid Input"));
		}
		
	}
	

	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<String> getCustomerById(@PathVariable("id") int id) throws CustomerNotFoundException
	{
		try {
			Customer getCustomerById= customerService.getCustomer(id);
			if(null!=getCustomerById)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Get Customer Details By %s"+id,getCustomerById.toString()));
			}
			else
			{
				return null;
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("\n Invaid Input"));
	
		}
	}
	
	@GetMapping(value = "/view")
	public ResponseEntity<String> getCustomerDetails()
	{
		try
		{
			List<Customer> getCustomerDetails= customerService.getAllCustomer();
			if(null!=getCustomerDetails)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Get Customer Details By %s",getCustomerDetails.toString()));
			}
			else
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("No Customer Data Is present in DB"));
			}
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("\n Invaid Input"));
	
		}
		
	}
	
	
	
	@PutMapping(value = "/updte")
	public ResponseEntity<String> updateCustomer(@RequestBody @Valid Customer customer) throws CustomerNotFoundException
	{
		Customer updateCustomer =customerService.updateCustomer(customer);
			try {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\nUpdated Customer Details in DB %s",updateCustomer.toString()));
			

			} catch (Exception e)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Customer Cant be updated"));
			

			}
		}
	
	@DeleteMapping(value = "/{custId}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("custId") int custId) throws CustomerNotFoundException
	{
		String deleteCustomer =customerService.deleteById(custId);
			try {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\nDleted %s",deleteCustomer.toString()));
			

			} catch (Exception e)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Customer Cant be updated"));
			

			}
		}
	
	
}
