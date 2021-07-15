package com.loan.Exceptions;

public class RequestLoanNotFoundException extends Exception{

	private static final long serialVersionUID = -6031761730065128874L;
	public RequestLoanNotFoundException(String errorMessage) {
		super(errorMessage);
	}
	
	public RequestLoanNotFoundException(String errorMessage, Throwable t) {
		super(errorMessage, t);
	}
}
