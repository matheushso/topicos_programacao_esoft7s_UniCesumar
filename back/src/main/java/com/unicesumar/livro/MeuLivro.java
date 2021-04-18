package com.unicesumar.livro;

import java.util.UUID;

import lombok.Data;

@Data
public class MeuLivro {
	
	private String id;
	private String titulo;
	private String autor;
	private int quantidadeDePaginas;
	
	public MeuLivro() {
		this.id = UUID.randomUUID().toString();
	}

	public MeuLivro(String titulo, String autor, int quantidadeDePaginas) {
		this();
		this.titulo = titulo;
		this.autor = autor;
		this.quantidadeDePaginas = quantidadeDePaginas;
	}	
}
