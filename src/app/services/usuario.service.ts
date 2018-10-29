import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

    // private _url : string = "http://localhost:3000/login";
    constructor(private _http: Http) { }

    public realizarLogin(cpf: string, password: string): Observable<any> {
        return this._http
            .get(`https://cloud-gasapi.herokuapp.com/validarUsuario?cpf=${cpf}&senha=${password}`)
            .pipe(map(response=>{return response.json()}));
    }

}