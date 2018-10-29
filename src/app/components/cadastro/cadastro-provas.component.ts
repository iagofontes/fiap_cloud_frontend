import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Prova } from '../../interfaces/prova-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Questao } from 'src/app/interfaces/questao-interface';
import { Resposta } from 'src/app/interfaces/resposta-interface';
import { ProvaService } from 'src/app/services/prova.service';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'cadastro-prova-component',
  templateUrl: './cadastro-prova.component.html'
})
export class CadastroProvaComponent implements OnInit {

  public prova: Prova = {id:Date.now(), nomeDaProva:'', questoes: Array()};
  public param: number;

  public question: Questao = {id:0, descricao:'', respostas:[]};
  public questao: string;
  public respostas: Resposta[] = [];
  public resposta : Resposta;

  public respostaCorreta : number;

  public resposta1: string;
  public resposta2: string;
  public resposta3: string;
  public resposta4: string;

  constructor(
    public activatedRoute: ActivatedRoute, 
    fb: FormBuilder,
    public provaService: ProvaService, 
    public route: Router) {
    this.activatedRoute.params.subscribe((param)=>{
      this.param = param['id'];
    });
  }

  ngOnInit() {

  }

  adicionarQuestao() : void {
    if(
      this.validarRespostas() &&
      (this.questao != null && this.questao != undefined && this.questao != '')
    ) {
      this.respostas.push(
        {"id": (this.respostas.length+1), "correta": (this.respostaCorreta==1?true:false), "descricao": this.resposta1},
        {"id": (this.respostas.length+2), "correta": (this.respostaCorreta==2?true:false), "descricao": this.resposta2},
        {"id": (this.respostas.length+3), "correta": (this.respostaCorreta==3?true:false), "descricao": this.resposta3},
        {"id": (this.respostas.length+4), "correta": (this.respostaCorreta==4?true:false), "descricao": this.resposta4}
      );
      this.question.respostas = this.respostas;
      this.question.id = this.prova.questoes.length+1;
      this.question.descricao = this.questao;
      this.prova.questoes.push(this.question);
      this.limparProva();
    } else {
      alert('Respostas inválidas.');
    }
  }

  finalizarProva() : void {
    if(this.validarProva()) {
      // this.provaService.saveProva(this.prova).subscribe
      this.salvarProva();
    } else {
      alert('Prova inválida, verifique os dados.');
    }
  }

  validarRespostas() : boolean {

    if(
      (this.resposta1 != '' && this.resposta1 != undefined) &&
      (this.resposta2 != '' && this.resposta2 != undefined) &&
      (this.resposta3 != '' && this.resposta3 != undefined) &&
      (this.resposta4 != '' && this.resposta4 != undefined)
    ) {
      return true;
    }
    return false;
  }

  validarProva() : boolean {

    if(
      (this.prova.id != null && this.prova.id > 0) &&
      (this.prova.nomeDaProva != null && this.prova.nomeDaProva != '') &&
      (this.prova.questoes.length > 0)
    ) {
      return true;
    }

    return false;

  }

  salvarProva() : boolean {
    this.provaService
      .saveProva(this.prova)
      .subscribe(
        (response)=>{
          if(response != null) {
            this.limparProva();
            this.route.navigateByUrl('/home');
          } else {
            alert('Problemas ao salvar prova.');
          }
        },
        (error)=>{
          console.error(error);
          console.log('Problemas ao salvar prova.');
          alert('Problemas ao salvar prova.');
        }
      );
    return false;
  }

  limparProva() : void {
    this.questao = '';
    this.question = {id:Date.now(), descricao: '', respostas: []};
    this.resposta = {id: 0, descricao: '', correta: false};
    this.respostas = [];
    this.respostaCorreta = 0;
    this.resposta1 = '';
    this.resposta2 = '';
    this.resposta3 = '';
    this.resposta4 = '';
  }

}