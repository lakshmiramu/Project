package com.loan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.Exceptions.CustomerNotFoundException;
import com.loan.Exceptions.LoanNotFoundException;
import com.loan.entity.Customer;
import com.loan.entity.LoanApplication;
import com.loan.service.LoanService;

@RestController
@RequestMapping("/loan")
public class LoanServiceController {

	
	@Autowired
	private LoanService loanService;
	
	@PostMapping("/create")
	public  ResponseEntity<String> addLoan(LoanApplication loanapi) {
		try {
			LoanApplication addLoan =loanService.addLoan(loanapi);
			
			if(null!=addLoan)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Added  customer  %s",addLoan.toString()));
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
	@GetMapping(value = "")
	public ResponseEntity<String> getAllLoans() throws LoanNotFoundException
	{
		try
		{
			List<LoanApplication> getAllLoans= loanService.getAllLoans();
			if(null!=getAllLoans)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Get Customer Details By %s",getAllLoans.toString()));
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
	

	@GetMapping(value = "/{id}")
	public ResponseEntity<String> getLoanById(@PathVariable("id") Long id) throws LoanNotFoundException
	{
		try {
			LoanApplication getLoan= loanService.getLoanById(id);
			
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Get Customer Details By %s"+id,getLoan.toString()));
			
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("\n Invaid Input"));
	
		}
	
	}
	
	
	@PutMapping ("/update")
	public  ResponseEntity<String> updateLoan(LoanApplication loanapi) {
		try {
			LoanApplication updateLoan =loanService.updateLoan(loanapi);
			
			if(null!=updateLoan)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n Update  customer  %s",updateLoan.toString()));
			}
			else
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("No data in DB"));
			}
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Invalid Input not update"));
		}
		
	}
	@DeleteMapping ("/{id}")
	public  ResponseEntity<String> deleteLoan(@PathVariable("id") Long id) {
		try {
			LoanApplication deleteLoan =loanService.deleteLoan(id);
			
			if(null!=deleteLoan)
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("\n delete customer  %s",deleteLoan.toString()));
			}
			else
			{
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("No data in DB"));
			}
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Invalid Input not update"));
		}
		
	}
}

