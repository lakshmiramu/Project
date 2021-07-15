package com.loan.Exceptions;

public class ValidationException extends Exception{

	private static final long serialVersionUID = -6587505105278862273L;

	public ValidationException(String errorMessage) {
		super(errorMessage);
	}

	public ValidationException(String errorMessage, Throwable t) {
		super(errorMessage, t);
	}
}
