package com.example.computer.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.computer.entity.dao.LaptopDao;
import com.example.computer.entity.models.Laptop;

@Service
public class LaptopServiceImpl implements LaptopService{
	
	@Autowired
	private LaptopDao storeDao;

	@Override
	public Laptop get(long id) {
		return storeDao.findById(id).get();
	}

	@Override
	public List<Laptop> getAll() {
		return (List<Laptop>) storeDao.findAll();
	}

	@Override
	public void post(Laptop store) {
		storeDao.save(store);
		
	}

	@Override
	public void put(Laptop store, long id) {
		storeDao.findById(id).ifPresent((x)->{
			store.setId(id);
			storeDao.save(store);
		});
		
	}

	@Override
	public void delete(long id) {
		storeDao.deleteById(id);
	}

}
