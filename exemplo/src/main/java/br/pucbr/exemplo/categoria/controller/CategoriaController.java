package br.pucbr.exemplo.categoria.controller;

import br.pucbr.exemplo.categoria.entity.Categoria;
import br.pucbr.exemplo.categoria.service.CategoriaService;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @PostMapping
    public void salvar(@RequestBody Categoria categoria) throws ExcecaoExemplo {
        categoriaService.salvar(categoria);
    }

    @GetMapping
    public List<Categoria> listar() {
        return categoriaService.listar();
    }

    @GetMapping("/{id}")
    public Categoria buscarPorId(@PathVariable("id") Integer id) throws ExcecaoExemplo{
        return categoriaService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) throws ExcecaoExemplo{
        categoriaService.excluir(id);
    }
}
