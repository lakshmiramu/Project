package com.capgemini.hibernate.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "user_registration")
public class UserRegistration implements Serializable {

	@Id
	@GenericGenerator(name = "user_auto", strategy = "increment")
	@GeneratedValue(generator = "user_auto")
	@Column(name = "id")
	private Long id;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "mobile_number")
	private String mobileNumber;
	
	@Column(name = "email")
	private String email;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UserRegistration [id=" + id + ", userName=" + userName + ", password=" + password + ", mobileNumber="
				+ mobileNumber + ", email=" + email + "]";
	}
	
}
