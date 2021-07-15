package com.loan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.Exceptions.LoanNotFoundException;

import com.loan.entity.LoanApplication;
import com.loan.repository.LoanRepository;

@Service
public class LoanService {

	@Autowired
	LoanRepository loanRepository;
	
	
	//adding loans
	@Transactional
	public  LoanApplication addLoan(LoanApplication loanapi)
	{
		return loanRepository.save(loanapi);
	}
	
	public List<LoanApplication> getAllLoans() throws LoanNotFoundException
	{
		List<LoanApplication> list =null;
		try {
			list= loanRepository.findAll();
			} catch(Exception e) {
				throw new LoanNotFoundException("No Applications Are There");
			}
		return list;
	}
	
	 public LoanApplication getLoanById(Long id) throws LoanNotFoundException
	  {
		 Optional<LoanApplication> optional =loanRepository.findById(id);
		 if(optional.isPresent()) {
			 loanRepository.findById(id);
			 return optional.get();
		 }
		 else {
			   
			 throw new LoanNotFoundException("Loan Application Id Not Found in records");
		 }
		
	  }
	 
	 @Transactional
	 public LoanApplication deleteLoan(long applicationId) throws LoanNotFoundException
	 {
		 Optional<LoanApplication> optional = loanRepository.findById(applicationId);
		 if(optional.isPresent()) {
			 loanRepository.deleteById(applicationId);
			 return optional.get();
		 }
		 else {
			 throw new LoanNotFoundException("Loan Application not found to delete");
		 }
	 }
	 @Transactional
	 public LoanApplication updateLoan(LoanApplication application) throws LoanNotFoundException
	 {

		 Optional<LoanApplication> optional = loanRepository.findById(application.getApplicationId());
		 if(optional.isPresent()) {
			 loanRepository.save(application);
			 return optional.get();
		 }
		 else {
			 throw new LoanNotFoundException("Loan Application can't be updated");
		 }
	 }
}
