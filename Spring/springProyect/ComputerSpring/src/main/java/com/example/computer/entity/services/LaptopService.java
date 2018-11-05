package com.example.computer.entity.services;

import java.util.List;

import com.example.computer.entity.models.Laptop;

public interface LaptopService {

	public Laptop get(long id);
	
	public List<Laptop> getAll();
	
	public void post(Laptop store);
	
	public void put(Laptop store, long id);
	
	public void delete(long id);
}