import { Component, Inject } from '@angular/core';
import { Prova } from '../../interfaces/prova-interface';
// import { MatDialogRef } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Aluno } from 'src/app/interfaces/aluno-interface';
import { ProvaService } from 'src/app/services/prova.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    public provas: Prova[];
    aluno: Aluno;

    constructor(
        public dialog: MatDialog,
        public provaService: ProvaService, 
        public router: Router
    ) {}
    
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

    public openDialog(idProva: string): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {nick: ''}
        });

        dialogRef.afterClosed().subscribe(result => {
            sessionStorage.setItem('nickName', result);
            sessionStorage.setItem('prova', 
                JSON.stringify(
                    this.provas.filter((prova)=>{
                        return prova.id.toString() == idProva;
                    })[0]
                )
            );

            this.router.navigate(['/prova', idProva]);
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-component.html',
})

export class DialogOverviewExampleDialog {

constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public aluno: Aluno) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
