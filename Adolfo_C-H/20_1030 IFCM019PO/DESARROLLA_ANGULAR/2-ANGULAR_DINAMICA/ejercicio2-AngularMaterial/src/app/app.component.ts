import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2-AngularMaterial';
  /* grid-list */
  nombres: any=[
    {nombre:'Juan',color:'yellow'},
    {nombre:'María',color:'orange'},
    {nombre:'Carlos',color:'green'},
    {nombre:'Luisa',color:'navy'},
    {nombre:'Fernanda',color:'blue'},
    {nombre:'Pedro',color:'pink'}
  ];
  //Variable definida en Angular Material
  showFiller = false;
}
