import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url="https://localhost:44303/api/persona";

  constructor(private http:HttpClient) { }

  onCrearRegistro(usuario:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, usuario);
  }

}

export class Persona
{
  nombre:string="";
  apellido:string="";
  dni:string="";
  fecha_nac:string="";
  pass:string="";
  email:string="";
  id:number=0;
  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
}

export class  LoginRequest {
  UserName:string="";
  Password:string="";
  Token?: string;
}

