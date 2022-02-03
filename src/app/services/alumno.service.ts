import { Injectable, Query, QueryList } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'; 
import { map, concatAll }  from  'rxjs/operators';
import { alumnData } from '../models/alumnData';
import { Observable, pipe, concat } from 'rxjs';
import { Pregunta } from  '../models/pregunta';
import { Correcta } from '../models/correcta';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  
  alumnosCollection: AngularFirestoreCollection;
  alumnos:Observable<alumnData[]>;
  alumnoDoc: AngularFirestoreDocument;

  preguntasCollection: AngularFirestoreCollection;
  preguntas:Observable<Pregunta[]>;
  preguntaDoc: AngularFirestoreDocument;
  
  CorrectasExam: Pregunta[];

  CorrectasCollection: AngularFirestoreCollection;
  Correctas:Observable<Correcta[]>;
  CorrectaDoc: AngularFirestoreDocument;

  constructor( public db: AngularFirestore) {
    //CONSULTA A LA COLECION ALUMNOS
    this.alumnosCollection = this.db.collection('alumnos');
    this.alumnos = this.alumnosCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as alumnData;
            data.id = a.payload.doc.id;
            return data;
            });
    }));
    //CONSULTA A LA COLECCION PREGUNTAS
    this.preguntasCollection = this.db.collection('preguntasCL');
    this.preguntas = this.preguntasCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(p => {
        const data = p.payload.doc.data() as Pregunta;
        data.id_pregunta = p.payload.doc.id;
        
        return data;
      });
    }));

    //CONSULTA CORECTAS
    this.CorrectasCollection= this.db.collection('correctas');
    this.Correctas = this.CorrectasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(c => {
        const data = c.payload.doc.data() as Correcta;
        //data.id_pregunta = c.payload.doc.id;
        
        return data;
        
      });
    }));
    
  }
  addAlumno(alumno: alumnData){
    this.alumnosCollection.add(alumno);
  }

  getAlumnos(){
    return this.alumnos;
  }

  getPregunta(){
    
    return this.preguntas;
  }

  getCorrectasall(){
    return this.Correctas;
  }

  comparaRespuestas(){
    let contador = 0;

  }

  getCorrectas(){
    this.db.collection('correctas').snapshotChanges().pipe(map( querySnapshot => {
      let correctas = []
      querySnapshot.forEach(correcta => {
        let correctaActual = {
          pregunta: correcta.payload.doc.data(),
          correcta: correcta.payload.doc.data()
        }
        correctas.push(correctaActual); 
      })
      return correctas;
    }))
    
  }

  obtieneResultados(alumnos){
    let cuentaCorrectas = 0;
    alumnos.test.forEach(respuesta => {
      let buscaenCorrectas = this.CorrectasExam.find(element => element.correcta == respuesta.pregunta);
      if(buscaenCorrectas){
        if(buscaenCorrectas.correcta == respuesta.respuesta){
          cuentaCorrectas++;
        }
      }
    })
    console.log(cuentaCorrectas);
    return cuentaCorrectas;
  }

}
