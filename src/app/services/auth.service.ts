import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsuarioAdminModel } from '../models/usuarioAdmin.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url ='https://identitytoolkit.googleapis.com/v1/';
  private apikey ='AIzaSyAyiLjNMCdX4vkB_kM0n8D_KE-tWhzGGg4';
  
  userToken:string;
  userId:string;
  //crear nuevos usuarios
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //LogIn
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) {
    this.leerToken();
    this.leerUid();
   }

  logout(){
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioAdminModel){
    const auhtData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
      retrunuid:true
    };
    return this.http.post(
      `${ this.url}accounts:signInWithPassword?key=${this.apikey}`,
      auhtData
      ).pipe(
        map(resp =>{
          console.log('entro en el map de RXJS')
          this.guardarToken(resp['idToken']);
          this.guardaruid(resp['localId']);
          return resp;
        })
      );
  }

  nuevoUser( usuario: UsuarioAdminModel){

    const auhtData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
      return this.http.post(
      `${ this.url}accounts:signUp?key=${this.apikey}`,
      auhtData
      ).pipe(
        map(resp =>{
          console.log('entro en el map de RXJS')
          this.guardarToken(resp['idToken']);
          this.guardaruid(resp['localId']);
          return resp;
        })
      );
  }

  private guardarToken( idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
  }

  
  private leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }
    return this.userToken;
  }

  private guardaruid( localId:string){
    this.userId = localId;
    localStorage.setItem('uid',localId);
  }

  private leerUid(){
    if(localStorage.getItem('uid')){
      this.userId = localStorage.getItem('uid');
    }else{
      this.userId = "";
    }
    return this.userId;
  }

  estaAutenticado(): boolean {
    
    return this.userToken.length > 2 && this.userId.length > 2;
  }
}
