package br.pucbr.exemplo.categoria.repository;

import br.pucbr.exemplo.categoria.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
}
