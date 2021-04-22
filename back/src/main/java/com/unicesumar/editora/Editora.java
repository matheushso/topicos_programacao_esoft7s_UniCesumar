package com.unicesumar.editora;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

import lombok.Data;

@Data
public class Editora {

	private String id;
	private String nome;
	private Date fundadaEm;
	private BigDecimal faturamentoMedio;
	
	public Editora() {
		this.id = UUID.randomUUID().toString();
	}
	
	public Editora(String sigla, String nome, Date fundadaEm, BigDecimal faturamentoMedio) {
		this();
		this.nome = nome;
		this.fundadaEm = fundadaEm;
		this.faturamentoMedio = faturamentoMedio;
	}
}
