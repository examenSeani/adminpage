import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas = [];
  correctas = [];

  constructor(public alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getPregunta().subscribe( pregunta => { 
      this.preguntas = pregunta;
     });
  }

}
