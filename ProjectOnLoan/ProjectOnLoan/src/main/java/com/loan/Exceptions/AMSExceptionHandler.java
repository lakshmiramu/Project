package com.loan.Exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@RestControllerAdvice
public class AMSExceptionHandler extends ResponseEntityExceptionHandler {

	
	@ExceptionHandler({ EmployeeNotFoundException.class })
	public ResponseEntity<Object> handleEmpolyeNotFoundExpection(EmployeeNotFoundException ex, WebRequest request) {
		return handleExceptionInternal(ex, ex.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR,
				request);
	}
	
	@ExceptionHandler({ CustomerNotFoundException.class })
	public ResponseEntity<Object> handleEmpolyeNotFoundExpection(CustomerNotFoundException ex, WebRequest request) {
		return handleExceptionInternal(ex, ex.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR,
				request);
	}
	
	
	@ExceptionHandler({ LoanNotFoundException.class })
	public ResponseEntity<Object> handleAssetNotFoundException(LoanNotFoundException ex, WebRequest request) {
		return handleExceptionInternal(ex, ex.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR,
				request);
	}


	@ExceptionHandler({ RequestLoanNotFoundException.class })
	public ResponseEntity<Object> handleRequestAssetsNotFoundExpection(RequestLoanNotFoundException ex, WebRequest request) {
		return handleExceptionInternal(ex, ex.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR,
				request);
	}
	
	
	
	@ExceptionHandler({ ValidationException.class })
	public ResponseEntity<Object> handleValidationExpection(ValidationException ex, WebRequest request) {
		return handleExceptionInternal(ex, ex.getMessage(), new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
}
