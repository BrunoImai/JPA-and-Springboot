package br.pucbr.exemplo.evento.service;

import br.pucbr.exemplo.evento.entity.Evento;
import br.pucbr.exemplo.evento.repository.EventoRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public void salvar(Evento evento) throws ExcecaoExemplo{
        if (evento.getNome() == null || evento.getNome().equals("") || evento.getNome().length() > 300) {
            throw new ExcecaoExemplo("ERR001","Os dados do evento estão incorretos!");
        } else  if (evento.getDesc() == null){
            throw new ExcecaoExemplo("ERR002", "Descricao do evento está incorreta!");
        } else  if (evento.getFoto() == null){
            throw new ExcecaoExemplo("ERR003", "Foto do evento está incorreta!");
        }

        eventoRepository.save(evento);
    }

    public List<Evento> listar() {
        return eventoRepository.findAll();
    }

    public Evento buscarPorId(Integer id) throws ExcecaoExemplo{
        if (id <= 0){
            throw new ExcecaoExemplo("ERR001","O id do evento não pode ser menor ou igual a 0");
        }
        try{
            Evento evento = eventoRepository.findById(id).get();
        } catch (NoSuchElementException e){
            throw new ExcecaoExemplo("ERR002", "Evento não existe");
        }
        return eventoRepository.findById(id).get();
    }

    public void excluir(Integer id) throws ExcecaoExemplo{
        if (id <= 0){
            throw new ExcecaoExemplo("ERR001","O id da exemplo não pode ser menor ou igual a 0");
        }
        eventoRepository.deleteById(id);
    }

}
