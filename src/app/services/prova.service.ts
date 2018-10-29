import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Prova } from '../interfaces/prova-interface';
import { Avaliacao } from '../interfaces/avaliacao-interface';

@Injectable({
    providedIn: 'root',
  })
export class ProvaService {

    private _url : string = "https://cloud-gasapi.herokuapp.com/listarProvasCadastradas";

    header: Headers;

    constructor(private _http: Http) {
        this.header = new Headers();
        this.header.append('Content-Type', 'application/json');
        this.header.append('Accept', 'application/json');
        this.header.append('Access-Control-Allow-Origin', '*');
    }

    public getProvas(): Observable<Array<Prova>> {
        return this._http
            .get(this._url, {headers:this.header})
            .pipe(map(response=>{return response.json()}));
    }

    public saveProva(prova: Prova): Observable<any> {
        return this
            ._http
            .post('https://cloud-gasapi.herokuapp.com/cadastrarProva', prova, {headers:this.header});
    }

    public saveUserTest(prova: any) : Observable<any> {
        console.log(JSON.stringify(prova));
        return this
            ._http
            .post(
                'https://cloud-gasapi.herokuapp.com/responderProva', 
                prova, 
                {headers:this.header}
            );
    }

}