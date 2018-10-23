import { Resposta } from './resposta-interface';

export interface Questao {
    id: number;
    descricao: string;
    respostas: Resposta[];
}
