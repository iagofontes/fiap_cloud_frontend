import { Component, OnInit } from '@angular/core';
import { ProvaService } from 'src/app/services/prova.service';
import { Prova } from 'src/app/interfaces/prova-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'listagem-prova',
  templateUrl: './listagem-prova.component.html',
  providers: [ ProvaService ],
  styleUrls: ['./listagem-prova.component.css']
})

export class ListagemProvaComponent implements OnInit {

    provas: Array<Prova>;
    constructor(public provaService: ProvaService, public router: Router){}

    ngOnInit() {
        this.provaService
            .getProvas()
            .subscribe(
                response=>{
                    if(response.length) {
                        this.provas = response;
                    }
                },
                error=>{
                    console.log(error);
                    alert('problemas ao buscar provas.');
                }
            );
    }

    alterarProva(id: number) : void {
        if(id) {
            // window.location.href = `/prova/${id}`
            this.router.navigate(['/manutencaoprova', id]);
        } else {
            alert('Código de prova inválido.');
        }
    }

    novaProva() : void {
        this.router.navigateByUrl('/manutencaoprova');
    }
}
