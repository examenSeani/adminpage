import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
import { ExporterService } from '../../services/exporter.service';
declare var $:any;
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnoss = [];
  corectas = [];
  cdata = [];
  dataa = [];
  filterAlumn ='';
  datacarre = [].sort();

  
  constructor( public alumnoService: AlumnoService, private auth: AuthService, private router:Router, private ExporterService: ExporterService ) { 

  }
  
  ngOnInit(): void {
    
    this.alumnoService.getAlumnos().subscribe( alumnos => { 
      this.alumnoss = alumnos;
     });

     this. alumnoService.getCorrectasall().subscribe( correctas => {
       this.corectas = correctas;
        console.log(this.alumnoss);// muestra 439 alumnos
      var prueba;
      //Recorre el arreglo alumnoss
      this.alumnoss.forEach(alumno => {
        var alumnoActual = {
          user: alumno.user,
          Nombre_Alumno:alumno.username,
          carrera: alumno.alumnData.carrera,
          respuestas: alumno.alumnExam,
          resultado: prueba,
          promedioSEANI:prueba,
        }
        console.log(alumnoActual)//muestra 138 alumnos
        var  cuentaCorrectas = 0;
        
        alumnoActual.respuestas.test.forEach(respuesta => {
          
          let buscaenCorrectas = this.corectas.find(element=> element.id_pregunta == respuesta.pregunta);
          if(buscaenCorrectas){
              if(buscaenCorrectas.correcta == respuesta.respuesta){
                (cuentaCorrectas++); 
              }   
          }
          
          //no poner nada aqui porque se repetira el numero de veces del valor de cuentaCorrectas 
        })
        var prom=(cuentaCorrectas/90*10).toFixed(2);

        alumnoActual.resultado = cuentaCorrectas;
        alumnoActual.promedioSEANI = prom;
        //console.log(alumnoActual)
        
        this.dataa.push(alumnoActual)
        //console.log(this.dataa)
      })
     });

     $(".dropdown-trigger").dropdown();
  }
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
  
  generarPDF(){
    const opcions ={
      filename: "Concentrado de calificaiones Examen de Admisión.pdf",
      html2canvas:{},
      jsPDF:{orientation: 'landscape'}
    };
    const content: Element = document.getElementById('tabla')
    
    html2pdf()
      .from(content)
      .set(opcions)
      .save();
  }
  
  export(): void{
    this.ExporterService.exportToExcel(this.dataa, 'Calificaciones');
  }
  OrderByCarrera(){
    this.dataa.sort(function(a,b){
      if(a.user < a.user){
        return -1;
      }else if (a.user > b.user) {
        return 1;
      }else{
        return 0;
      }
      
    });
    console.log(this.dataa)
  }
}
