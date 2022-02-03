import { Component, OnInit } from '@angular/core';
import { UsuarioAdminModel } from '../../models/usuarioAdmin.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private auht: AuthService) { }

  usuario: UsuarioAdminModel;

  ngOnInit(): void {
    this.usuario = new UsuarioAdminModel();
    
  }
  onSubmit( form: NgForm){
    if( form.invalid) {return}

    Swal.fire({
      icon:'info',
      text: 'Espere por favor..',
      allowOutsideClick:false,
    });
    Swal.showLoading();

    this.auht.nuevoUser( this.usuario)
    .subscribe( resp => {
      Swal.close();
    },(err) => {

      console.log(err.error.error.message);

      Swal.fire({
        icon: 'error',
        title: 'Error al resgistrar',
        text:'err.error.error.message'
      })

    });
  }
}
