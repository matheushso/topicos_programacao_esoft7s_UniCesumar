package com.unicesumar.hello;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class HelloController {
	
	@GetMapping
	private String getMessage() {
		return "Olá Controller!! Current Time: " + new Date().toLocaleString();
	}
	
	@GetMapping("/outra")
	private String getOutra() {
		return "Outro hello!!";
	}
	
	@GetMapping("/objeto")
	private Mensagem getObjeto() {
		return new Mensagem("Olha, uma mensagem mais complexa!");
	}
	
	@PostMapping("/objeto")
	private Mensagem postObjeto(@RequestBody String conteudo) {
		return new Mensagem(conteudo);
	}
	
	@PostMapping("/objetoAsJson")
	private Mensagem postObjetoAsJson(@RequestBody Mensagem mensagem) {
		return mensagem;
	}
}
