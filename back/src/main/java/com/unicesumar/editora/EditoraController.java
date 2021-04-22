package com.unicesumar.editora;

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
@RequestMapping("/api/editora")
public class EditoraController {
	
	private List<Editora> editora = new ArrayList<>();
	
	
	@GetMapping
	public List<Editora> get() {
		return this.editora;
	}
	
	@GetMapping("/{idParaEditar}")
	public Editora getById(@PathVariable("idParaEditar") String idParaEditar) {
		return this.editora.stream().filter(editora -> editora.getId().equals(idParaEditar)).findFirst().orElseGet(Editora::new);
	}

	@PutMapping("/{id}")
	public void put(@PathVariable String id, @RequestBody Editora editoraEditada) {
		this.editora = this.editora.stream()
				.filter(editora -> !editora.getId().equals(id))
				.collect(Collectors.toList());
		
		this.editora.add(editoraEditada);
	}
	
	@PostMapping
	public String post(@RequestBody Editora nova) {
		if (this.editora.contains(nova)) {
			throw new RuntimeException("Editora duplicada!");
		} else {
			this.editora.add(nova);
			return nova.getId();
		}
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable String id) {
		this.editora = this.editora.stream()
				.filter(editora -> !editora.getId().equals(id))
				.collect(Collectors.toList());
		return "Editora apagada!";
	}
}
