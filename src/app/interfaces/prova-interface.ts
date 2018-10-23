import { Questao } from './questao-interface';

export interface Prova {
    id: number;
    nomeDaProva: string;
    questoes: Questao[];

}
