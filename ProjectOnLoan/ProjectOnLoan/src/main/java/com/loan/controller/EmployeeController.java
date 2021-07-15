/**
 * 
 */
package com.loan.controller;

import java.util.List;
import java.util.Optional;

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

import com.loan.entity.LoanApplication;
import com.loan.Exceptions.EmployeeNotFoundException;
import com.loan.entity.Employee;
import com.loan.service.EmployeeService;

/**
 * @author DELL
 *
 */
@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping
	public ResponseEntity<String> getAllEmployee() {

		List<Employee> registrationList = employeeService.getAllEmployees();
		try {
			if (null != registrationList)
			{
				// Registration constructor Json with Java OBject
				System.out.println();
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Retrieved all user list %s\n", registrationList.toString()));
			} else {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("There were no Users existed in the DB"));
			}
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Inavalid Data"));
		
		}
	}

	
	      @GetMapping (value = "/{userId}") 
	      public ResponseEntity<String> getById(@PathVariable int userId) {
	         try {
	        	 
		    	  if (null != employeeService)
		    	  {
		                return ResponseEntity.status(HttpStatus.OK)
		                		.body(String.format("Retrieved all user list %s\n", employeeService.toString()));
		    	  }
		    	  else
		    	  {
		    		  return ResponseEntity.status(HttpStatus.OK)
		                		.body(String.format("There was no User existed on the base of  "+userId+" in the DB "));
		    	  }

			} catch (Exception e)
	         {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Inavalid Data"));
			 } 
	         
	      
	      }
	
	 @PostMapping (value = "/create")
	 public ResponseEntity<String> addEmployee(@RequestBody @Valid Employee employee) {
		 
		 Employee addEmp= employeeService.addEmployee(employee) ;
		 try 
		 {
			
					return ResponseEntity.status(HttpStatus.OK)
							.body(String.format("Retrieved all user list %s\n", addEmp.toString()));
				
		} catch (Exception e)
		 {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Inavalid Data"));	
		}
		 
	 }
	  

	 @PostMapping(value = "/addEmployees")
	 public ResponseEntity<String> addEmployees(@RequestBody List<Employee> registration) throws EmployeeNotFoundException
	 {
		 
		 List<Employee> addEmolyees=employeeService.addEmployees(registration);
		
		 try {
			 if (null != addEmolyees) {
					// Registration constructor Json with Java OBject
					
					return ResponseEntity.status(HttpStatus.OK)
							.body(String.format("Retrieved all user list %s\n", addEmolyees.toString()));
				} else {
					return ResponseEntity.status(HttpStatus.OK)
							.body(String.format("There were no Users existed in the DB"));
				}
		} catch (Exception e) 
		 {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Inavalid Data"));	
		 }
		 
	 }
	 
	 @PutMapping(value="/update")
	 public ResponseEntity<String> updateEmployee(@RequestBody @Valid Employee employee) throws EmployeeNotFoundException
	 {
		
		 try {
			 Employee updateEmp= employeeService.updateEmployee(employee);
			 return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Retrieved all user list %s\n",updateEmp.toString()));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Employee not cant be updated"));
		}
	 }
    
	 @DeleteMapping(value = "/{id}")
      public String deleteEmployee(@PathVariable("id") int id) throws EmployeeNotFoundException
      {
		 try 
		 {
			 return employeeService.deletEmployee(id);
			 
		 } catch (Exception e) 
		 {
			return "Invalid Input Data";
		 }
    	  
      }
	 
	
	
}
