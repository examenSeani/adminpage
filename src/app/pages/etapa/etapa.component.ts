import { Component,  OnInit} from '@angular/core';
import { EtapaServicesService } from '../../services/etapa.services.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
import { ExporterService } from '../../services/exporter.service';
declare var $:any;

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})




export class EtapaComponent implements OnInit {

  ngDropdown = 1;

  alumnoss = [];

  corectas = [];
  correctasEL = [];
  correctasCL = [];
  correctasPA = [];

  cdata = [];
  dataa = [];
  filterAlumn ='';

  datos = [ "Etapa 2 / 2022","Etapa 3 / 2022","Etapa 2","Etapa 3"];
  opcionSeleccionado: string  = 'Etapa 1 / 2022'; // Iniciamos
  verSeleccion: string ;



  /**Combo inicio */

  
    /**Combo fin */

  constructor(  public alumnoService: EtapaServicesService, private auth: AuthService, private router:Router,  private ExporterService: ExporterService) 
  {
    //value 0 = etapa 1 2022
    //this.datos = [ "Etapa 2","Etapa 3"];

    

   }


   limpiarCampos()
   {
    
    
    this.alumnoss = [];

    this.corectas = [];
    this.correctasEL = [];
    this.correctasCL = [];
    this.correctasPA = [];
  
    this.cdata = [];
    this.dataa = [];




  
    
   }

   capturar() {
   
    //this.verSeleccion = this.opcionSeleccionado;
    this.limpiarCampos();
   
  //alert(this.opcionSeleccionado);
   

    this.ngOnInit();

  }


  getEtapaSeleccion(param: any):any
  {
    var resp="";

       switch(param)
       {
         case "Etapa 1 / 2022": resp="e1-2022"; break;   
         case "Etapa 2 / 2022": resp="e2-2022"; break;   
         case "Etapa 3 / 2022": resp="e3-2022"; break;         
         case "Etapa 2": resp="alumnos2"; break;
         case "Etapa 3": resp="alumnos3"; break;
       }

       return resp;
  }




  ngOnInit(): void {
    //carga lista de alumnos de la segunda etapa en un arreglo "alumnoss"

  
    this.alumnoService.iniciar(this.getEtapaSeleccion( this.opcionSeleccionado));
    //this.alumnoService.iniciar();

    this.alumnoService.getAlumnos().subscribe( alumnos => { 

      //alert("otra consulta");
/*
      if(this.alumnoss.length>0)
      return;
      this.limpiarCampos();
      */
      this.alumnoss = alumnos;


        //Comienza comparacion de preguntas pensamiento matematico
     this. alumnoService.getCorrectasPM().subscribe( correctas => {
      this.alumnoService.getCorrectasEL().subscribe( correctasel =>{
        this.alumnoService.getCorrectasPA().subscribe( correctaspa =>{
          this.alumnoService.getCorrectasCL().subscribe( correctascl =>{

           this.corectas = correctas;
           this.correctasEL=correctasel;
           this.correctasPA=correctaspa;
           this.correctasCL=correctascl;
       

           var prueba;
           var prmttl=0;
           //Recorre el arreglo alumnoss
        //   alert(this.alumnoss.length);

           this.alumnoss.forEach(alumno => {
             var alumnoActual = {
               user: alumno.user,
               Nombre_Alumno:alumno.username,
               carrera: alumno.alumnData.carrera,
               respuestasPM:alumno.matematico,
               CorrectasPM: prueba,
               promedioPM:prueba,
               respuestasEL:alumno.lengua,
               CorrectasEL: prueba,
               promedioEL:prueba,
               respuestasPA:alumno.test,
               CorrectasPA: prueba,
               promedioPA:prueba,
               respuestasCL:alumno.logico,
               CorrectasCL: prueba,
               promedioCL:prueba,
               promedioToTal:prueba,
               email : alumno.alumnData.email
             }
             //console.log(alumnoActual)//muestra 138 alumnos

               //recorre las respuestas de PM
               var  cuentaCorrectas = 0;
       
               alumnoActual.respuestasPM.forEach(respuesta => {
                 
                 let buscaenCorrectas = this.corectas.find(element=> element.id_pregunta == respuesta.pregunta);
                 if(buscaenCorrectas){
                     if(buscaenCorrectas.correcta == respuesta.respuesta){
                       (cuentaCorrectas++); 
                     }   
                 }
               })

               //recorre las respuestas de EL
               var cuentaCorrectasEl = 0;

               alumnoActual.respuestasEL.forEach(respuesta => {
                 let buscaenCorrectasEL = this.correctasEL.find(element => element.id_pregunta == respuesta.pregunta);
                 if(buscaenCorrectasEL){
                   if(buscaenCorrectasEL.correcta == respuesta.respuesta){
                     (cuentaCorrectasEl++);
                   }
                 }
               })

               //recorre las respuestas de PA
               var cuentaCorrectasPA = 0;

               alumnoActual.respuestasPA.forEach(respuesta => {
                 let buscaenCorrectasPA = this.correctasPA.find(element => element.id_pregunta == respuesta.pregunta);
                 if(buscaenCorrectasPA){
                   if(buscaenCorrectasPA.correcta == respuesta.respuesta){
                     (cuentaCorrectasPA++);
                   }
                 }
               })

               //recorre las respuestas de CL
               var cuentaCorrectasCL = 0;

               alumnoActual.respuestasCL.forEach(respuesta => {
                 let buscaenCorrectasCL = this.correctasCL.find(element => element.id_pregunta == respuesta.pregunta);
                 if(buscaenCorrectasCL){
                   if(buscaenCorrectasCL.correcta == respuesta.respuesta){
                     (cuentaCorrectasCL++);
                   }
                 }
               })
                 //console.log(cuentaCorrectasCL);


                 //obtiene el promedio de correctas(Pensamiento matematico)
                 var prom=(cuentaCorrectas/25*10).toFixed(2);
                 alumnoActual.CorrectasPM = cuentaCorrectas;
                 alumnoActual.promedioPM = prom;
                 
                 //obtiene el promedio de EL(Estructura del lenguaje)
                 var promEL=(cuentaCorrectasEl/24*10).toFixed(2);
                 alumnoActual.CorrectasEL = cuentaCorrectasEl;
                 alumnoActual.promedioEL = promEL;

                 //obtiene el promedio de PA(Pensamiento Analitico o Logico depende)
                 var promPA=(cuentaCorrectasPA/29*10).toFixed(2);
                 alumnoActual.CorrectasPA = cuentaCorrectasPA;
                 alumnoActual.promedioPA = promPA;

                 //obtiene el promedio de PA(Pensamiento Analitico o Logico depende)
                 var promCL=(cuentaCorrectasCL/15*10).toFixed(2);
                 alumnoActual.CorrectasCL = cuentaCorrectasCL;
                 alumnoActual.promedioCL = promCL;
               
                 //obtiene el promedio total del alumno
                 
                 var promT=(parseInt(prom)+parseInt(promPA)+parseInt(promEL)+parseInt(promCL))/4;
                 
                 
                 alumnoActual.promedioToTal=promT;
                 
                // console.log(alumnoActual);
                 //carga todos los datos en dataa
            
                 this.dataa.push(alumnoActual);

                // alert(this.dataa.length);
              //   console.log(this.dataa)


          })
        })
       
     })


      })
    });//termina comparacion de preguntas pensamiento matematico

   //   alert(this.verSeleccion);
    //  alert(alumnos.length);

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
}
