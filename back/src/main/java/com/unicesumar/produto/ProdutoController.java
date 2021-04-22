package com.unicesumar.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
	
	@Autowired
	private ProdutoService service;
	
	@GetMapping
	public List<Produto> get(@RequestParam(name = "termo", required = false) String termo) {
		System.out.println("Termo >>>>> " + termo);
		return service.obterTodos(termo);
	}
	
	@GetMapping("/{idParaEditar}")
	public Produto getById(@PathVariable("idParaEditar") String idParaEditar) {
		return service.obterPeloId(idParaEditar);
	}

	@PutMapping("/{id}")
	public void put(@PathVariable String id, @RequestBody Produto produtoEditado) {
		service.salvar(produtoEditado);
	}
	
	@PostMapping
	public String post(@RequestBody Produto novo) {
		Produto produtoSalvo = service.salvar(novo);
		return produtoSalvo.getId();
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable String id) {
		service.excluirPeloId(id);
		return "Produto apagado!";
	}
}
