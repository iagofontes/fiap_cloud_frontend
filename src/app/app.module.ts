import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent, DialogOverviewExampleDialog } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProvaComponent, MensagemComponent } from './components/prova/prova.component';
import { CadastroProvaComponent } from './components/cadastro/cadastro-provas.component';
import { ListagemProvaComponent } from './components/listagem-prova/listagem-prova.component';
import { RankingComponent } from './components/ranking/ranking.component';

import {
  MaterialModule
} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProvaComponent,
    CadastroProvaComponent,
    ListagemProvaComponent,
    MensagemComponent,
    RankingComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
