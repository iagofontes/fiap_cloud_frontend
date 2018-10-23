import { Component } from '@angular/core';
import { Prova } from '../../interfaces/prova-interface';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    public provas: Prova[];

    constructor() {
        this.provas = provasBase;
    }

}

const provasBase: Prova[] = [
    {
        id: 1,
        nomeDaProva: 'Prova de Português',
        questoes: [
            {
                id: 1,
                descricao: 'Qual a cor do cavalo de napoleão ?',
                respostas: [
                    {
                        id: 1,
                        correta: false,
                        descricao: 'Azul'
                    },
                    {
                        id: 2,
                        correta: true,
                        descricao: 'Branco'
                    },
                    {
                        id: 3,
                        correta: false,
                        descricao: 'Rosa'
                    },
                    {
                        id: 4,
                        correta: false,
                        descricao: 'Preto'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        nomeDaProva: 'Prova de Matemática',
        questoes: [
            {
                id: 2,
                descricao: 'Quanto é 1 + 1 ?',
                respostas: [
                    {
                        id: 5,
                        correta: false,
                        descricao: '1'
                    },
                    {
                        id: 6,
                        correta: true,
                        descricao: '2'
                    },
                    {
                        id: 7,
                        correta: false,
                        descricao: '3'
                    },
                    {
                        id: 8,
                        correta: false,
                        descricao: '4'
                    }
                ]
            }
        ]
    }
];
