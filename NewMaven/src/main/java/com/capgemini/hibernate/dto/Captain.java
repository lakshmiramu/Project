package com.capgemini.hibernate.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "captain")
public class Captain implements Serializable{
    @Id
    @GenericGenerator(name = "cap_auto", strategy = "increment")
    @GeneratedValue(generator = "cap_auto")
    @Column(name = "c_id")
	private Long cId;
    
    @Column(name ="name")
	 private String name;
    
    @Column(name = "jersy_name")
	 private String jersyname;
    
    @Column(name ="age")
	 private Long age;
    
    @Column(name = "matches_played")
	 private Long noMatchedPlayed;
	 
	public Long getcId() {
		return cId;
	}
	public void setcId(Long cId) {
		this.cId = cId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJersyname() {
		return jersyname;
	}
	public void setJersyname(String jersyname) {
		this.jersyname = jersyname;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	public Long getNoMatchedPlayed() {
		return noMatchedPlayed;
	}
	public void setNoMatchedPlayed(Long noMatchedPlayed) {
		this.noMatchedPlayed = noMatchedPlayed;
	}
	@Override
	public String toString() {
		return "Captain    [cId=" +  cId  + ",  name=  " + name + ", jersyname=  " + jersyname + ", age=  " + age
				+ ", noMatchedPlayed= " + noMatchedPlayed +   "]";
	}
	
	
	 
}