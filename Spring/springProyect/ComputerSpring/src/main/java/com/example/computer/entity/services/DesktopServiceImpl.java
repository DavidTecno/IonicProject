package com.example.computer.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.computer.entity.dao.DesktopDao;
import com.example.computer.entity.models.Desktop;

@Service
public class DesktopServiceImpl implements DesktopService{
	
	@Autowired
	private DesktopDao storeDao;

	@Override
	public Desktop get(long id) {
		return storeDao.findById(id).get();
	}

	@Override
	public List<Desktop> getAll() {
		return (List<Desktop>) storeDao.findAll();
	}

	@Override
	public void post(Desktop store) {
		storeDao.save(store);
		
	}

	@Override
	public void put(Desktop store, long id) {
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
