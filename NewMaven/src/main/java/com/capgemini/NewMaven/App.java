package com.capgemini.NewMaven;

/**
 * Hello world!
 *
 */
public class App 
{
    @SuppressWarnings("resource")
	public static void main( String[] args )
    {
       // Employee employee = new Employee();
    	// use below code with xml and java config 
    	
    	ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring-web.xml");
    //	Employee employee = context.getBean(Employee.class);
    	//System.out.println(employee);
    //	Movie movie = context.getBean(Movie.class);
    //	System.out.println(movie);
    	Book book = context.getBean(Book.class);
    	Book book1 = context.getBean(Book.class);
    	Book book2 = context.getBean(Book.class);
    	//System.out.println(book);
    	
    	//use below code in case if u dont use xml config
    	/*
    	AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();
    	applicationContext.register(AppConfig.class);
    	applicationContext.refresh();
    	System.out.println(applicationContext.getBean(Book.class));
    	*/
    }
}
