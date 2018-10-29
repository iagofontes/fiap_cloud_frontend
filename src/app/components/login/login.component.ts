import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UsuarioService ]
})
export class LoginComponent {
  
  hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  cpf = '';
  passwordUser = '';
  
  // constructor() {}
  constructor(public usuarioService: UsuarioService, public router: Router) {}

  doLogin() {
    if((this.cpf.length>0) && this.passwordUser.length > 3) {
      this.usuarioService
        .realizarLogin(this.cpf, this.passwordUser)
        .subscribe(
          (response)=>{
            sessionStorage.setItem('logged', 'true');
            this.router.navigateByUrl('/home');
          },
          (error)=>{
            console.log(error);
            alert('Problemas ao realizar login');
          }
        );
    }
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'Digite um e-mail' :
  //       this.email.hasError('email') ? 'E-mail inválido' :
  //           '';
  // }

}
