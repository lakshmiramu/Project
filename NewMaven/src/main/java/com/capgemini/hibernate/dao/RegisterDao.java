package com.capgemini.hibernate.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.capgemini.hibernate.dto.UserDto;
import com.capgemini.hibernate.entity.UserRegistration;

public class RegisterDao {

	
	public void saveUser(UserRegistration userRegistration) {
			Configuration cfg = new Configuration();
			cfg.configure();
			cfg.addAnnotatedClass(UserRegistration.class);
			SessionFactory sessionFactory = cfg.buildSessionFactory();
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(userRegistration);
			transaction.commit();
	}
	
	//Create a method which takes id as input and returns the object
	
	public UserRegistration getUserById(Long id) {
			Configuration cfg = new Configuration();
			cfg.configure();
			SessionFactory sessionFactory = cfg.buildSessionFactory();
			Session session = sessionFactory.openSession();
			return session.get(UserRegistration.class, id);
	}
	
	public void updateUserDetailsById(Long id, UserDto userDto) {
		UserRegistration userRegistration = getUserById(id);
		if(userRegistration != null) {
			//userDto.getEmail() != null ? userRegistration.setEmail(userDto.getEmail()) :'';
			userRegistration.setMobileNumber(userDto.getMobileNumber());
			userRegistration.setPassword(userDto.getPassword());
			userRegistration.setEmail(userDto.getEmail());
			userRegistration.setUserName(userDto.getUserName());
				
				Configuration cfg = new Configuration();
				cfg.configure();
				SessionFactory sessionFactory = cfg.buildSessionFactory();
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				session.update(userRegistration);
				tx.commit();
		}else {
			System.out.println("There is no rescord exists for a id : "+ id);
		}
	}
}
