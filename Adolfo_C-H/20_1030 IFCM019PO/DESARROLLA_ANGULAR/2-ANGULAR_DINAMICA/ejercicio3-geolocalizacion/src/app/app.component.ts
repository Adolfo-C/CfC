import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio3: geolocalizacion + libreria Agm/core';
  /* Variables de configuración de un mapa */
  latitud: number = 40.449218479138416;
  longitud: number = 3.6729055704400992;
  zoom:number = 17;
}
