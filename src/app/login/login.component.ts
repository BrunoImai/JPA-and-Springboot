import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('',Validators.email),
    senha: new FormControl('',Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

  logar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.get('login')?.value);
      console.log(this.loginForm.get('senha')?.value);
    } else {
      console.log("erro");
    }
}

}
