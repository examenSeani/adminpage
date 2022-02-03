import { Component, OnInit } from '@angular/core';
import { AddAlService } from '../../services/add-al.service'
import { from } from 'rxjs';
import { addAlumno } from 'src/app/models/addAlumno'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare var $:any;;
@Component({
  selector: 'app-addalumno',
  templateUrl: './addalumno.component.html',
  styleUrls: ['./addalumno.component.css']
})
export class AddalumnoComponent implements OnInit {
  
  alumno = {} as addAlumno;

  constructor(public alumnoService: AddAlService, private auth: AuthService, private router:Router ) { }

  ngOnInit(): void {
    $(".dropdown-trigger").dropdown();
  }

  addAlumno(){
    //if(this.alumno.username !== '' && this.alumno.alumnData.carrera !== '' && this.alumno.paterno !== ''){
      this.alumnoService.addAlumno(this.alumno);
      this.alumno = {} as addAlumno;
    //}
    
  }
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}
