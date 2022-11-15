import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  cliente: string = "";
  senha: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
      console.log("cliente " + this.cliente);
      console.log("senha " + this.senha);
  }

}
