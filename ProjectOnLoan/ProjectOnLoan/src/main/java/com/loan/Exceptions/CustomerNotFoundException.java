package com.loan.Exceptions;

public class CustomerNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3913184319153324574L;

	public CustomerNotFoundException(String errorMessage) {
		super(errorMessage);
	}
	
	public CustomerNotFoundException(String errorMessage, Throwable t) {
		super(errorMessage, t);
	}
}
