import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  //Funcion que permite validar el token para el accedo a las paginas en el frontend
  canActivate() {
    if (this.authService.logeado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
