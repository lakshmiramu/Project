package com.loan.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;



@Entity
@Table(name="EMPLOYEE")

public class Employee implements Serializable {

	private static final long serialVersionUID = 8281900551741831524L;
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private int userId;
	
	@JsonProperty(value="firstName")
	@Column(name = "FIRST_NAME")
	private String firstName;
	
	@JsonProperty(value="lastName")
	@Column(name = "LAST_NAME")
	private String lastName;
	
	@JsonProperty(value="mobileNumber")
	@Column(name="MOBILE_NUMBER")
	private long mobileNumber;
	
	@JsonProperty(value="gender")
	@Column(name = "GENDER")
	private String gender;
	
	@JsonProperty(value="emailId")
	@Column(name="EMAIL_ID")
	private String emailId;
	
	@JsonProperty(value="password")
	@Column(name = "PASSWORD")
	private String password;
	
	@JsonProperty(value="address")	
	@Column(name = "ADDRESS")
	private String address;
	
	@JsonProperty(value="role")	
	@Column(name = "Role")
	private String role;

	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public long getMobileNumber() {
		return mobileNumber;
	}



	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getEmailId() {
		return emailId;
	}



	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}

	


	public Employee() {
		super();
	}







	public Employee(int userId, String password, String role) {
		super();
		this.userId = userId;
		this.password = password;
		this.role = role;
	}

	


	public Employee(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
	}



	public Employee(int userId, String firstName, String lastName, long mobileNumber, String gender, String emailId,
			String password, String address,String role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNumber = mobileNumber;
		this.gender = gender;
		this.emailId = emailId;
		this.password = password;
		this.address = address;
		this.role = role;
	}



	@Override
	public String toString() {
		return "Registration [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", mobileNumber=" + mobileNumber + ", gender=" + gender  + ", role=" +role+ ", emailId=" + emailId + ", password="
				+ password + ", address=" + address + "]";
	}
	
	
	

}
