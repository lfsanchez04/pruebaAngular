import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Marker {
  position: { lat: any; lng: any };
  label: any;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent {
  center = { lat: 3.4533494, lng: -76.4864125 };
  zoom = 12;
  markers: Marker[] = [ //ARREGLO POR DEFECTO
    { position: { lat: 3.4533494, lng: -76.4864125 }, label: 'A' },
    { position: { lat: 3.4133494, lng: -76.4564125 }, label: 'B' },
  ];
  //Guardar los datos del formulario
  markerForms = this.markers.map((marker) =>
    this.fb.group({
      lat: [marker.position.lat],
      lng: [marker.position.lng],
      label: [marker.label],
    })
  );

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}
  //Funcion que actualiza los marcadores
  updateMarker(index: number) {
    const markerData = this.markerForms[index].value;
    this.markers[index] = {
      position: { lat: markerData.lat, lng: markerData.lng },
      label: markerData.label,
    };
    this.notify('Marcador actualizado correctamente');
  }
  //Funcion que agrega nuevos marcadores
  addMarker() {
    const newMarker = {
      position: { lat: this.center.lat, lng: this.center.lng },
      label: '',
    };
    this.markers.push(newMarker);
    this.markerForms.push(
      this.fb.group({
        lat: [newMarker.position.lat],
        lng: [newMarker.position.lng],
        label: [newMarker.label],
      })
    );
    this.notify('Marcador agregado correctamente');
  }
  //Funcion que borra un marcador
  removeMarker(index: number) {
    this.markers.splice(index, 1);
    this.markerForms.splice(index, 1);
    this.notify('Marcador removido correctamente');
  }
  //Funcion para crear una notificacion
  notify(msg: string) {
    this.snackBar.open(msg, 'Cerrar', {
      duration: 2000,
    });
  }
}
