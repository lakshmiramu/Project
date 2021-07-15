package com.loan.Exceptions;

public class EmployeeNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2942976847474028258L;

	public EmployeeNotFoundException(String errorMessage) {
		super(errorMessage);
	}
	
	public EmployeeNotFoundException(String errorMessage, Throwable t) {
		super(errorMessage, t);
	}
}
