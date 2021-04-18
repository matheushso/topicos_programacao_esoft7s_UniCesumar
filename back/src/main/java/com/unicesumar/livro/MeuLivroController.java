package com.unicesumar.livro;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/livros")
public class MeuLivroController {
	
	private List<MeuLivro> livros = new ArrayList<>();
	
	public MeuLivroController() {
		livros.add(new MeuLivro("Livro1", "Autor1", 111));
		livros.add(new MeuLivro("Livro2", "Autor2", 222));
		livros.add(new MeuLivro("Livro3", "Autor3", 333));
	}
	
	@GetMapping
	public List<MeuLivro> get() {
		return this.livros;
	}
	
	@GetMapping("/{idParaEditar}")
	public MeuLivro getById(@PathVariable("idParaEditar") String idParaEditar) {
		return this.livros.stream().filter(livro -> livro.getId().equals(idParaEditar)).findFirst().orElseGet(MeuLivro::new);
	}

	@PutMapping("/{id}")
	public void put(@PathVariable String id, @RequestBody MeuLivro livroEditado) {
		this.livros = this.livros.stream()
				.filter(livro -> !livro.getId().equals(id))
				.collect(Collectors.toList());
		
		this.livros.add(livroEditado);
	}
	
	@PostMapping
	public String post(@RequestBody MeuLivro novo) {
		if (this.livros.contains(novo)) {
			throw new RuntimeException("Livro duplicado!");
		} else {
			this.livros.add(novo);
			return novo.getId();
		}
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable String id) {
		this.livros = this.livros.stream()
				.filter(livro -> !livro.getId().equals(id))
				.collect(Collectors.toList());
		return "Livro apagado!";
	}
}
