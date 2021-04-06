package com.unicesumar.hello;

import java.util.Date;

public class Mensagem {
	
	private Date criadoEm;
	private String conteudo;
	
	public Mensagem(String conteudo, Date criadoEm) {
		this.conteudo = conteudo;
		this.criadoEm = criadoEm;
	}
	
	public Mensagem(String conteudo) {
		this.conteudo = conteudo;
		this.criadoEm = new Date();
	}
	
	public String getConteudo() {
		return conteudo;
	}
	
	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	
	public Date getCriadoEm() {
		return criadoEm;
	}
	
	public void setCriadoEm(String criadoEm) {
		this.criadoEm = new Date();
	}
	
}
