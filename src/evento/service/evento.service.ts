import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoModel } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }

  salvar(eventoModel : EventoModel){
    return this.httpClient.post<EventoModel>("http://localhost:8090/evento",eventoModel);
  }

  listar(){
    return this.httpClient.get<EventoModel[]>("http://localhost:8090/evento");
  }

  
}