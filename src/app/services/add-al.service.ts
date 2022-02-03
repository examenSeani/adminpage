import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addAlumno } from '../models/addAlumno';

@Injectable({
  providedIn: 'root'
})

export class AddAlService {
  alumnosCollection:AngularFirestoreCollection;
  alumnos:Observable<addAlumno[]>;
  alumnoDoc;

  constructor(public db: AngularFirestore) { 
    this.alumnosCollection = this.db.collection('alumnos');
    this.alumnos = this.alumnosCollection.snapshotChanges().pipe(map(actions => {
        return actions.map (a => {
            const data = a.payload.doc.data() as addAlumno;
            data.id = a.payload.doc.id;
            return data;
            });
    }));
  }
  addAlumno(alumno: addAlumno){
    this.alumnosCollection.add(alumno);
  }
}
