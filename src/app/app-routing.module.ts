import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LivrosComponent } from './livros/livros.component';
import { EventoComponent } from 'src/evento/evento.component';

const routes: Routes = [
  { path: 'usuario', title: 'Liber - Cadastro Usuário', component: UsuarioComponent },
  { path: 'login', title: 'Liber - Login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/api/home',
    pathMatch: 'full',
  },
  {
    path: 'api',
    component: MenuComponent,
    children: [
      { path: 'home', title: 'Liber - Home', component: HomeComponent },
      { path: 'eventos', title: 'Desenrole - Eventos', component: EventoComponent },
    ]
  },
  {
    path: 'api',
    component: SideNavComponent,
    children: [
      { path: 'livros', component: LivrosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
