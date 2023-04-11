import { Component } from '@angular/core';
import Swal from 'sweetalert2';//librería


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 1º Data BINDING interpolation */
  title = 'ejercicio5: Binding';
  nombre: string = 'Escribe tu nombre y apellidos';
  apellido: string = 'Cuadrado';
  edad: number = 22;
  /* 2º Event Binding*/
  saludar() {//Declaramos una función -método funcional-
    /* Estructuras de ejecución alert()*/

    Swal.fire({
      title: 'Aparición de nuestro primer microservicio con importación',
      text: '¿Deseas continuar?',
      confirmButtonText: 'Continuar',
      confirmButtonColor: 'navy',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://www.portosenavios.com.br/images/151111-mar.jpg)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.tenor.com/images/2c91aad28b7a16917f6853128f883e5d/tenor.gif")
        left top
        no-repeat
        `,
      footer: 'Continuará...',
      icon: 'question',
    })
  }
  /* 3º Event Property Binding*/
  disable: boolean = true;
  //Constructor para que permita trabajar la funcion que llame a una propiedad del objeto
  constructor() {
    setTimeout(() => {
      this.disable = false
    }, 5000);

  }
  /* 4º Two way data Binding */
  texto: string = 'Curso Angular I 2023';
  dni: string = 'Introduce DNI'

  /* 5ºEvent this Binding */
  estilo = 'rojo'//Clase que defino en css
}
