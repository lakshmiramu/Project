package com.capgemini.hibernate.dto;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table (name = "team")
public class Team implements Serializable {

	@Id
	@GenericGenerator(name="team_auto",strategy = "increment")
	@GeneratedValue(generator = "team_auto")
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "type")
	private String teamtype;
	
	@Column(name = "country")
	private String country;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fr_id")
	private Captain captain;
	
	
	public Captain getCaptain() {
		return captain;
	}
	public void setCaptain(Captain captain) {
		this.captain = captain;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTeamtype() {
		return teamtype;
	}
	public void setTeamtype(String teamtype) {
		this.teamtype = teamtype;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}	
}
