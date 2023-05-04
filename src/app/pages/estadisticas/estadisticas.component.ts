import { Component } from '@angular/core';
import { VentasService } from '../../services/ventas.service';

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
})
export class EstadisticasComponent {
  displayedColumns: string[] = ['product', 'quantity', 'price'];
  ventas: any = [];

  constructor(private ventaService: VentasService) {
    this.ventaService.ventas$.subscribe((ventas) => (this.ventas = ventas)); //Obtener data que se envio desde compras
  }
}
