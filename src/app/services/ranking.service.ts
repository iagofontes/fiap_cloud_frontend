import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ranking } from '../interfaces/ranking-interface';


@Injectable({
    providedIn: 'root',
  })

export class RankingService {

    private _url : string = "https://cloud-gasapi.herokuapp.com/listarPorScore";

    header: Headers;

    constructor(private _http: Http) {
        this.header = new Headers();
        this.header.append('Content-Type', 'application/json');
        this.header.append('Accept', 'application/json');
        this.header.append('Access-Control-Allow-Origin', '*');
    }

    public getRanking(): Observable<Array<Ranking>> {
        return this._http
            .get(this._url, {headers:this.header})
            .pipe(map(response=>{return response.json()}));
    }

}