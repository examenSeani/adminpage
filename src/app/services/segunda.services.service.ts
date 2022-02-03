import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'; 
import { map, concatAll }  from  'rxjs/operators';
import { Observable, pipe, concat } from 'rxjs';
import { segundoAlumno } from  '../models/alumndb';
import { Pregunta } from  '../models/pregunta';
import { Correcta } from '../models/correcta';

@Injectable({
  providedIn: 'root'
})
export class SegundaServicesService {

  alumnosCollection: AngularFirestoreCollection;
  alumnos:Observable<segundoAlumno[]>;
  alumnoDoc: AngularFirestoreDocument;
  //preguntas PM
  preguntasCollection: AngularFirestoreCollection;
  preguntas:Observable<Pregunta[]>;
  preguntaDoc: AngularFirestoreDocument;

  CorrectasCollection: AngularFirestoreCollection;
  Correctas:Observable<Correcta[]>;
  CorrectaDoc: AngularFirestoreDocument;

  CorrectasExam: Pregunta[];
  //preguntas EL
  preguntasELCollection: AngularFirestoreCollection;
  preguntasEL:Observable<Pregunta[]>;
  preguntaDocEL: AngularFirestoreDocument;
  
  CorrectasELCollection: AngularFirestoreCollection;
  CorrectasEL:Observable<Correcta[]>;
  CorrectaDocEL: AngularFirestoreDocument;

  //preguntas CL
  preguntasCLCollection: AngularFirestoreCollection;
  preguntasCL:Observable<Pregunta[]>;
  preguntaDocCL: AngularFirestoreDocument;
  
  CorrectasCLCollection: AngularFirestoreCollection;
  CorrectasCL:Observable<Correcta[]>;
  CorrectaDocCL: AngularFirestoreDocument;

  //preguntas PL
  preguntasPACollection: AngularFirestoreCollection;
  preguntasPA:Observable<Pregunta[]>;
  preguntaDocPA: AngularFirestoreDocument;
  
  CorrectasPACollection: AngularFirestoreCollection;
  CorrectasPA:Observable<Correcta[]>;
  CorrectaDocPA: AngularFirestoreDocument;
  

  

  constructor(public db: AngularFirestore) {
    //consulta a la coleccion de alumnos
    this.alumnosCollection = this.db.collection('alumnos2');
    this.alumnos = this.alumnosCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as segundoAlumno;
            data.id = a.payload.doc.id;
            return data;
            });
    }));

    //CONSULTA A LA COLECCION PREGUNTASPM
    this.preguntasCollection = this.db.collection('preguntasPM');
    this.preguntas = this.preguntasCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(p => {
        const data = p.payload.doc.data() as Pregunta;
        data.id_pregunta = p.payload.doc.id;
        
        return data;
      });
    }));

    //CONSULTA CORECTASPM
    this.CorrectasCollection= this.db.collection('correctasPM');
    this.Correctas = this.CorrectasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(c => {
        const data = c.payload.doc.data() as Correcta;
        //data.id_pregunta = c.payload.doc.id;
        
        return data;
        
      });
    }));


     //CONSULTA A LA COLECCION PREGUNTASEL
     this.preguntasELCollection = this.db.collection('preguntasEL');
     this.preguntasEL = this.preguntasELCollection.snapshotChanges().pipe(map(actions =>{
       return actions.map(p => {
         const data = p.payload.doc.data() as Pregunta;
         data.id_pregunta = p.payload.doc.id;
         
         return data;
       });
     }));
 
     //CONSULTA CORECTASEL
     this.CorrectasELCollection= this.db.collection('correctasEL');
     this.CorrectasEL = this.CorrectasELCollection.snapshotChanges().pipe(map(actions => {
       return actions.map(c => {
         const data = c.payload.doc.data() as Correcta;
         //data.id_pregunta = c.payload.doc.id;
         
         return data;
         
       });
     }));


     //CONSULTA A LA COLECCION PREGUNTASCL
     this.preguntasCLCollection = this.db.collection('preguntasCL');
     this.preguntasCL = this.preguntasCLCollection.snapshotChanges().pipe(map(actions =>{
       return actions.map(p => {
         const data = p.payload.doc.data() as Pregunta;
         data.id_pregunta = p.payload.doc.id;
         
         return data;
       });
     }));
 
     //CONSULTA CORECTASCL
     this.CorrectasCLCollection= this.db.collection('correctasCL');
     this.CorrectasCL = this.CorrectasCLCollection.snapshotChanges().pipe(map(actions => {
       return actions.map(c => {
         const data = c.payload.doc.data() as Correcta;
         //data.id_pregunta = c.payload.doc.id;
         
         return data;
         
       });
     }));


     
     //CONSULTA A LA COLECCION PREGUNTASPA
     this.preguntasPACollection = this.db.collection('preguntasPA');
     this.preguntasPA = this.preguntasPACollection.snapshotChanges().pipe(map(actions =>{
       return actions.map(p => {
         const data = p.payload.doc.data() as Pregunta;
         data.id_pregunta = p.payload.doc.id;
         
         return data;
       });
     }));
 
     //CONSULTA CORECTASPA
     this.CorrectasPACollection= this.db.collection('correctasPA');
     this.CorrectasPA = this.CorrectasPACollection.snapshotChanges().pipe(map(actions => {
       return actions.map(c => {
         const data = c.payload.doc.data() as Correcta;
         //data.id_pregunta = c.payload.doc.id;
         
         return data;
         
       });
     }));



   }

   getAlumnos(){
    return this.alumnos;
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

  getPreguntasPM(){
    
    return this.preguntas;
  }

  getCorrectasPM(){
    return this.Correctas;
  }

  getPreguntasEL(){
    
    return this.preguntasEL;
  }

  getCorrectasEL(){
    return this.CorrectasEL;
  }

  getPreguntasCL(){
    
    return this.preguntasCL;
  }

  getCorrectasCL(){
    return this.CorrectasCL;
  }

  getPreguntasPA(){
    
    return this.preguntasPA;
  }

  getCorrectasPA(){
    return this.CorrectasPA;
  }

}
