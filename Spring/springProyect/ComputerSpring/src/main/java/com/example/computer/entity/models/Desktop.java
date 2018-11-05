package com.example.computer.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name= "desktop")
public class Desktop implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String model;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String price;
	
	private int core;
	
	private String procesador;
	
	private String speed;
	
	private String ram;

	@Column(name = "graphic_card_mode")
	private String graphicCardMode;
	
	private String lector;
	
	public Desktop(String model, @NotEmpty String name, @NotEmpty String price, int core, String procesador, String speed,
			String ram, String graphicCardMode, String lector) {
		super();
		this.model = model;
		this.name = name;
		this.price = price;
		this.core = core;
		this.procesador = procesador;
		this.speed = speed;
		this.ram = ram;
		this.graphicCardMode = graphicCardMode;
		this.lector = lector;
	}
	
	public Desktop() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public int getCore() {
		return core;
	}

	public void setCore(int core) {
		this.core = core;
	}

	public String getProcesador() {
		return procesador;
	}

	public void setProcesador(String procesador) {
		this.procesador = procesador;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}

	public String getRam() {
		return ram;
	}

	public void setRam(String ram) {
		this.ram = ram;
	}

	public String getGraphicCardMode() {
		return graphicCardMode;
	}

	public void setGraphicCardMode(String graphicCardMode) {
		this.graphicCardMode = graphicCardMode;
	}
	
	public String getLector() {
		return lector;
	}

	public void setLector(String lector) {
		this.lector = lector;
	}
	
}
