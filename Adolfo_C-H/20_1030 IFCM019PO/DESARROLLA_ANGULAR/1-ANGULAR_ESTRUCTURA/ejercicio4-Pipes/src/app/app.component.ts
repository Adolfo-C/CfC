import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio4-Pipes';
  /* Variables para establecer salidas de Pipes */

  texto:string='Bienvenidos a la 1ª parte de Angular'
  numero:number=7788.654321;
  porcentaje:number=0.5488;
  fecha: Date = new Date();
  jsonObjeto = {nombre:'Francisco',edad:36,teléfono:{telf1:918549800,telf2:957656587}};
}
