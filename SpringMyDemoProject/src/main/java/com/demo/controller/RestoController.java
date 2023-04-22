package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Restaurant;
import com.demo.repository.Restorepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class RestoController 
{
	
	@Autowired
	private Restorepository restorepository;  
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertrecord")
	public Restaurant insertrecord(@RequestBody Restaurant r1)                    // insert service
	{
		return restorepository.save(r1);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updaterecord")
	public Restaurant updaterecord(@RequestBody Restaurant r1)                    // insert service
	{
		return restorepository.save(r1);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deleterecord")
	public void deleterecord(@RequestBody Restaurant r1)                    // update service
	{
		restorepository.delete(r1);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewrecord")
	public List<Restaurant> viewrecord()
	{
		return restorepository.findAll();
	}
	
}
