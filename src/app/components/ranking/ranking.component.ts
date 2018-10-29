import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/interfaces/ranking-interface';
import { RankingService } from 'src/app/services/ranking.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ranking-component',
  templateUrl: './ranking.component.html',

})
export class RankingComponent implements OnInit {

    public competidores : Ranking[];

    constructor(
        public rankingService: RankingService,
        public router: Router
    ) {}

    ngOnInit() {
        this.rankingService
            .getRanking()
            .subscribe(
                (result)=>{
                    this.competidores = result;
                    console.log(this.competidores);
                },
                (error: HttpErrorResponse)=>{
                    console.log(error.message);
                    alert('Problemas ao buscar Ranking.');
                }
            );
    }

    goHome() {
        this.router.navigateByUrl('/home');
    }

}