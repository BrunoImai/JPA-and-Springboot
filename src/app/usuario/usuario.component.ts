import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number | undefined;
  nome: string = '';
  login: string = '';
  senha: string = '';
  confirmaSenha: string = '';

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    
  }

  salvar() {
    console.log('id = ' + this.id);
    console.log('nome = ' + this.nome);
    console.log('login = ' + this.login);
    console.log('senha = ' + this.senha);

    let usuario = new UsuarioModel();
    if(this.senha == this.confirmaSenha){
      usuario.id = this.id;
      usuario.nome = this.nome;
      usuario.login = this.login;
      usuario.senha = this.senha;
    } else{
      console.log('Senhas não são iguais!')
    }

    this.usuarioService.salvar(usuario).subscribe(usuarioRetorno => {
      console.log('funcionou');
    }, erro => {
      console.log(erro);
    })
  }

  listar() {
    this.usuarioService.listar().subscribe(usuarios => {
      let divUsuario = document.getElementById("testando");

      usuarios.forEach(user => {
        let br = document.createElement("app-usuario")
        divUsuario?.appendChild(br)
      });

    })
  }
}