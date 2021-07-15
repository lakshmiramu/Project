package com.loan.service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.loan.Exceptions.EmployeeNotFoundException;
import com.loan.entity.Employee;
import com.loan.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;

	// Get All Employee Details
	public List<Employee> getAllEmployees() {
		List<Employee> employeeList = repository.findAll();
		if (null == employeeList) {
			return null;
		}
		else
			{
			return employeeList;
			}
	}
	
	// Get Employees Details By ID
	public Employee getEmployeeById(int id) {
	
		return repository.findById(id).orElse(null);
		
	}
	
	// Any employee can register
	public Employee addEmployee(Employee employee)
	{
		return repository.save(employee);
	}
	
	public List<Employee> addEmployees(List<Employee> registration)
	{
		List<Employee> addEmployees=repository.saveAll(registration);
		if(null!=addEmployees)
		{
			return addEmployees;
		}
		else
		{
			return null;
		}
		
	}
	
	public Employee updateEmployee(Employee employee) throws EmployeeNotFoundException
	{
		Optional<Employee> optional= repository.findById(employee.getUserId());
				if(optional.isPresent())
				{
					repository.save(employee);
					return optional.get();
				}
				else {
					throw new EmployeeNotFoundException("Employee cant be updated");
				}
		
	
		
	}
	// Delete employee by Id
	public String deletEmployee(int id)
	{
		repository.deleteById(id);
		return "Employee Was Removed From the DataBase";
	}
	
	



}
