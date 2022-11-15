import { Component, OnInit } from '@angular/core';
import { EventoModel } from './model/event.model';
import { EventoService } from './service/evento.service';
@Component({
  selector: 'app-card',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(private eventoService : EventoService) {}

  eventos:EventoModel[] = []

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.eventoService.listar().subscribe(eventos => {
    
      this.eventos = eventos;
      console.log("Deu")
    })
  }
}
