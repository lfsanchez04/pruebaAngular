import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Venta {
  product: number;
  cant: number;
}

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private ventaSource = new BehaviorSubject<Venta[]>([]);
  ventas$ = this.ventaSource.asObservable();
  //Funcion con un observable que me permite agregar las ventas
  addVenta(venta: Venta): void {
    this.ventaSource.next([...this.ventaSource.value, venta]);
  }
}
