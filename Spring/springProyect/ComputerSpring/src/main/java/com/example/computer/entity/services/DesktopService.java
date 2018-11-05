package com.example.computer.entity.services;

import java.util.List;

import com.example.computer.entity.models.Desktop;

public interface DesktopService {

public Desktop get(long id);
	
	public List<Desktop> getAll();
	
	public void post(Desktop store);
	
	public void put(Desktop store, long id);
	
	public void delete(long id);
}
