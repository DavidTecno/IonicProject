package com.example.computer.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.computer.entity.models.Desktop;
import com.example.computer.entity.services.DesktopService;

@CrossOrigin(origins = {"*"})
@RestController
public class DesktopController {

	@Autowired
	DesktopService storeService;
	
	@GetMapping("/desktops")
	public List<Desktop> getAllStore(){
		return storeService.getAll();
	}
	
	@GetMapping("/desktop/{id}")
	public Desktop getOne(@PathVariable(value = "id") long id){
		return storeService.get(id);
	}
	
	@PostMapping("/desktop")
	public void add(@RequestBody Desktop store) {
		storeService.post(store);
	}
	
	@PutMapping("/desktop/{id}")
	public void update(@RequestBody Desktop store, @PathVariable(value = "id") long id) {
		storeService.put(store, id);
	}
	
	@DeleteMapping("/desktop/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		storeService.delete(id);
	}
}
