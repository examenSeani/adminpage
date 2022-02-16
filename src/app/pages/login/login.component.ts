import { Component, OnInit } from '@angular/core';
import { UsuarioAdminModel } from '../../models/usuarioAdmin.model';
import { AuthService } from '../../services/auth.service'
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  usuario: UsuarioAdminModel = new UsuarioAdminModel();
  
  constructor( private auht: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  login( form: NgForm){
    if( form.invalid ) { return;}

    Swal.fire({
      icon:'info',
      text: 'Espere por favor..',
      allowOutsideClick:false,
    });
    Swal.showLoading();


    this.auht.login(this.usuario)
    .subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('etapa')
    }, (err) =>{

      console.log(err.error.error.messaje);

      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text:'Datos Incorrectos'
      })

    })
    
  }

}
