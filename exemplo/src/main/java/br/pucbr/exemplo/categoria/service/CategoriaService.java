package br.pucbr.exemplo.categoria.service;

import br.pucbr.exemplo.categoria.entity.Categoria;
import br.pucbr.exemplo.categoria.repository.CategoriaRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public void salvar(Categoria categoria) throws ExcecaoExemplo {
        if (categoria.getNome() == null || categoria.getNome().equals("") || categoria.getNome().length() > 255){
            throw new ExcecaoExemplo("ERR001", "Os dados do livro estão incorretos!");
        }
        categoriaRepository.save(categoria);
    }

    public List<Categoria> listar() {
        return categoriaRepository.findAll();
    }

    public Categoria buscarPorId(Integer id) throws ExcecaoExemplo{
        if (id <= 0){
            throw new ExcecaoExemplo("ERR001","O id do livro não pode ser menor ou igual a 0!");
        }

        try{
            Categoria categoria = categoriaRepository.findById(id).get();
        } catch (NoSuchElementException e){
            throw new ExcecaoExemplo("ERR002", "Livro não encontrado!");
        }
        return categoriaRepository.findById(id).get();
    }

    public void excluir(Integer id) throws ExcecaoExemplo{
        if (id <= 0){
            throw new ExcecaoExemplo("ERR001","O id do livro não pode ser menor ou igual a 0!");
        }
        categoriaRepository.deleteById(id);
    }

}
