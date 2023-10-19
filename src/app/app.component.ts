import { Component, importProvidersFrom } from '@angular/core';
import { Productos } from "./productos";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarList = true;
  title = '7-AngularJS';
  productos: Productos[] = [
    { nombre: 'disco solido 240', costos: '$24200' },
    { nombre: 'disco solido 480', costos: '$45000' },
    { nombre: 'disco m2 240', costos: '$22000' },
    { nombre: 'disco m2 480', costos: '$50850' }
  ];
}


