import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Servidor de npm run dev, para el backend
  private URL = 'http://localhost:3000/pruebaAngular';

  constructor(private http: HttpClient, private router: Router) {}
  //Funcion que valida el ingreso
  login(data: any) {
    return this.http.post<any>(this.URL + '/login', data);
  }
  //Funcion que verifica si esta logeado
  logeado(): boolean {
    return !!localStorage.getItem('token');
  }
  //Funcion que da como respuesta el token
  getToken() {
    return localStorage.getItem('token');
  }
  //Funcion que elimina el token y termina la sesion
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
