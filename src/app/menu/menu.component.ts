import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router, public authService: AuthService) {}

  //Redireccionamiento del menu
  proyectos() {
    this.router.navigate(['/proyectos']);
  }

  estadisticas() {
    this.router.navigate(['/estadisticas']);
  }

  compras() {
    this.router.navigate(['/compras']);
  }
}
