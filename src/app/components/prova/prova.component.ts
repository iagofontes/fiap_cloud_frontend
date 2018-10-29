import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Prova } from '../../interfaces/prova-interface';
import { MatSelectionList, MatSelectionListChange, MatDialogRef, MAT_DIALOG_DATA, MatDialog } 
from '@angular/material';
import { Questao } from 'src/app/interfaces/questao-interface';
import { Resposta } from 'src/app/interfaces/resposta-interface';
import { Observable } from 'rxjs';
import { ProvaService } from 'src/app/services/prova.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'prova-component',
  templateUrl: './prova.component.html'
})
export class ProvaComponent implements OnInit {

  @ViewChild(MatSelectionList) tabela: MatSelectionList;
  // public tabela: MatSelectionList;

  public nickName: string = '';
  private prova: Prova;
  private provaResposta;
  private questao: Questao;
  private resposta: Resposta;

  public buttonName: string = 'Próxima questão';

  private questaoAtual: number = 0;
  private respostaSelecionada: number = 0;

  private qtAcerto : number = 0;
  private qtErros  : number = 0;

  constructor(
    public dialog: MatDialog,
    public provaService: ProvaService,
    public router: Router
  ) {}

  ngOnInit() {
    this.recuperarProva();
    this.popularQuestao();
    this.tabela.selectionChange.subscribe((s:MatSelectionListChange)=>{
      s.source.deselectAll();
      s.option.selected = true;
      this.respostaSelecionada = s.option.value;
    });
    this.provaResposta = this.prova;
  }

  recuperarProva() : void {
    this.prova = JSON.parse(sessionStorage.getItem('prova'));
    this.nickName = sessionStorage.getItem('nickName');
  }

  recuperarQuestao() : Questao {
    return this.prova.questoes[this.questaoAtual];
  }

  popularQuestao() : void {
    this.questao = this.recuperarQuestao();
  }

  proximaQuestao() : void {
    // pular para a próxima questão e verificar se o usuário acertou ou não
    this.responderQuestao();
    this.limparQuestoes();
    this.questaoAtual++;
    if(this.questaoAtual <= this.prova.questoes.length-1) {
      // mostrar se acertou ou não e ir para a próxima questão
      this.popularQuestao();
      if(this.questaoAtual == this.prova.questoes.length-1)
        this.buttonName = 'Finalizar prova';
    } else {
      // não existem mais perguntas
      // exibir a totalização de acertos e depois exibir o ranking.
      this.finalizarProva();
    }

  }

  responderQuestao() {

    let arr = this.provaResposta
      .questoes[this.questaoAtual]
      .respostas.filter((resp)=>{
        return resp.id == this.respostaSelecionada;
      });
    
    this.provaResposta.questoes[this.questaoAtual].respostas = arr;
  }

  corrigirQuestao(resposta: number, callback)  {
    let resp = false;
    this.prova
      .questoes[this.questaoAtual]
      .respostas
      .forEach((el, index)=>{
        if(resposta == el.id && el.correta) {
          resp = true;
        }
      });

    (resp)?this.qtAcerto++:this.qtErros++;

    this.openDialog(
      'Correção',
      this.montarMensagem(resp),
      resp, 
      callback()
    );

  }

  montarMensagem(acerto: boolean) : string {
    if(acerto) {
      return 'Parabéns, você acertou a questão.'
    } else {
      return 'Que pena, você errou a questão.';
    }
  }

  openDialog(
    titulo    : string, 
    mensagem  : string,
    response  : boolean, 
    after     ): void {
    const dialogRef = this.dialog.open(
      MensagemComponent, {
        width: '250px',
        data: {
          titulo: titulo,
          mensagem: mensagem,
          response: response
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  totalizarRespostas() {
    this.openDialog(
      'Totalização', 
      this.montarMensagemTotaliacao(),
      false,
      ()=>{return;}
    );
  }

  montarMensagemTotaliacao() : string {
    return `Você finalizou a prova, acertou ${this.qtAcerto} questões e errou ${this.qtErros}.`;
  }

  limparQuestoes() {
    this.tabela.deselectAll();
    this.respostaSelecionada = 0;
  }

  finalizarProva() {

    this.provaResposta.nick = this.nickName;
    this.provaResposta._id = {};
    this
      .provaService
      .saveUserTest(this.provaResposta).subscribe(
        (result)=>{
          // redirecionar para ranking
          this.router.navigateByUrl('/ranking');
        },
        (error: HttpErrorResponse)=>{
          this.openDialog(
            'Erros',
            'Problemas ao finalizar a avaliação.',
            false,
            ()=>{}
          );
          console.log(error.message);
        }
      );
  }

}

@Component({
  selector: 'mensagem-component',
  templateUrl: 'mensagem.component.html',
})

export class MensagemComponent {

constructor(
  public dialogRef: MatDialogRef<MensagemComponent>,
  @Inject(MAT_DIALOG_DATA) 
    public data: Mensagem
  ) {}

  finalizar() : void {
    this.dialogRef.close();
  }

}

export interface Mensagem {
  titulo: string;
  mensagem: string;
  response: boolean;
}