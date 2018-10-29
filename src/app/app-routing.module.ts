import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProvaComponent } from './components/prova/prova.component';
import { CadastroProvaComponent } from './components/cadastro/cadastro-provas.component';
import { ListagemProvaComponent } from './components/listagem-prova/listagem-prova.component';
import { RankingComponent } from './components/ranking/ranking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'prova/:id', component: ProvaComponent },
  { path: 'provas', component: ListagemProvaComponent },
  { path: 'manutencaoprova', component: CadastroProvaComponent },
  { path: 'manutencaoprova/:id', component: CadastroProvaComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }