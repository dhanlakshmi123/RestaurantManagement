package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Restaurant 
{
	@Id
	private int restoid;
	private String restoname;
	private String ownername;
	private String address;
	private int contactno;
	private String special;
	
	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurant(int restoid, String restoname, String ownername, String address, int contactno, String special) {
		super();
		this.restoid = restoid;
		this.restoname = restoname;
		this.ownername = ownername;
		this.address = address;
		this.contactno = contactno;
		this.special = special;
	}

	public int getRestoid() {
		return restoid;
	}

	public void setRestoid(int restoid) {
		this.restoid = restoid;
	}

	public String getRestoname() {
		return restoname;
	}

	public void setRestoname(String restoname) {
		this.restoname = restoname;
	}

	public String getOwnername() {
		return ownername;
	}

	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getContactno() {
		return contactno;
	}

	public void setContactno(int contactno) {
		this.contactno = contactno;
	}

	public String getSpecial() {
		return special;
	}

	public void setSpecial(String special) {
		this.special = special;
	}
	
	
	

	


	
	
	
}
