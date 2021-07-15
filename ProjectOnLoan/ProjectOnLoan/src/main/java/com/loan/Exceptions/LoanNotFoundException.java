package com.loan.Exceptions;

public class LoanNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public LoanNotFoundException(String errorMessage) {
		super(errorMessage);
	}
	
	public LoanNotFoundException(String errorMessage, Throwable t) {
		super(errorMessage, t);
	}
}
