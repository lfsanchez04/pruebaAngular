import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { MenuComponent } from './menu/menu.component';
import { ComprasComponent } from './pages/compras/compras.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [ //Rutas que se usaron
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard] },
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [AuthGuard] },
  { path: 'compras', component: ComprasComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
