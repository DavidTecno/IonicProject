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

import com.example.computer.entity.models.Laptop;
import com.example.computer.entity.services.LaptopService;

@CrossOrigin(origins = {"*"})
@RestController
public class LaptopController {

	@Autowired
	LaptopService storeService;
	
	@GetMapping("/laptops")
	public List<Laptop> getAllStore(){
		return storeService.getAll();
	}
	
	@GetMapping("/laptop/{id}")
	public Laptop getOne(@PathVariable(value = "id") long id){
		return storeService.get(id);
	}
	
	@PostMapping("/laptop")
	public void add(@RequestBody Laptop store) {
		storeService.post(store);
	}
	
	@PutMapping("/laptop/{idLaptop}")
	public void update(@RequestBody Laptop store, @PathVariable(value = "idLaptop") long idLaptop) {
		storeService.put(store, idLaptop);
	}
	
	@DeleteMapping("/laptop/{idLaptop}")
	public void delete(@PathVariable(value = "idLaptop") long idLaptop) {
		storeService.delete(idLaptop);
	}
}
