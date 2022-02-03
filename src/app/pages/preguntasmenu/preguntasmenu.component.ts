import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare var $:any;;

@Component({
  selector: 'app-preguntasmenu',
  templateUrl: './preguntasmenu.component.html',
  styleUrls: ['./preguntasmenu.component.css']
})
export class PreguntasmenuComponent implements OnInit {

  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    $(".dropdown-trigger").dropdown();
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}
