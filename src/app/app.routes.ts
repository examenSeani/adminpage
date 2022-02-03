import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AddalumnoComponent } from '../app/pages/addalumno/addalumno.component'
import { ErrorComponent } from '../app/pages/error/error.component'
import { PreguntasComponent } from '../app/pages/preguntas/preguntas.component'
import { SegundaEtapaComponent} from '../app/pages/segunda-etapa/segunda-etapa.component';
import { AuthGuard } from './guards/auth.guard'
import { PreguntasmenuComponent } from '../app/pages/preguntasmenu/preguntasmenu.component';
import { TerceraEtapaComponent } from '../app/pages/tercera-etapa/tercera-etapa.component';

export const ROUTES: Routes= [
  { path: 'login',  component: LoginComponent },
  { path: 'alumnos',  component: AlumnosComponent, canActivate: [AuthGuard] },
  { path: 'segunda',  component: SegundaEtapaComponent, canActivate: [AuthGuard]},
  { path: 'tercera',  component: TerceraEtapaComponent, canActivate: [AuthGuard]},
  { path: 'registro',  component: RegistroComponent },
  { path: 'addAlumno',  component: AddalumnoComponent, canActivate: [AuthGuard] },
  { path: 'error',  component: ErrorComponent },
  { path: 'pregunamenu',  component: PreguntasmenuComponent, canActivate: [AuthGuard]},
  { path: 'preguntas',  component: PreguntasComponent },
  { path: '**', pathMatch: 'full',  redirectTo: 'login'}
];