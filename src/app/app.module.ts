import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app/app-routing.module';
import { observable } from 'rxjs';
//firabase
import { AngularFireModule } from '@angular/fire';
import  { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AddalumnoComponent } from './pages/addalumno/addalumno.component';
import { ErrorComponent } from './pages/error/error.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
//crutas
import { RouterModule}from '@angular/router'
import {ROUTES} from '../app/app.routes';

import { SegundaEtapaComponent } from './pages/segunda-etapa/segunda-etapa.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';

//PDF MAKE
import * as html2pdf from 'html2pdf.js';
import { PreguntasmenuComponent } from './pages/preguntasmenu/preguntasmenu.component';
import { TerceraEtapaComponent } from './pages/tercera-etapa/tercera-etapa.component';

import { EtapaComponent } from './pages/etapa/etapa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnosComponent,
    RegistroComponent,
    AddalumnoComponent,
    ErrorComponent,
    PreguntasComponent,
    SegundaEtapaComponent,
    HomeComponent,
    FilterPipe,
    PreguntasmenuComponent,
    TerceraEtapaComponent,
    EtapaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule ,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot( ROUTES),
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
