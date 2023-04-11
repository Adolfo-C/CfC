import { Component } from '@angular/core';
/* 
*     /-----COMPONENTES-----\

  Un módulo consta de 1 o más componentes, dicha estructura tendrá una
  entidad propia y la composición de sus Componentes (Podrán estar compuestos
    por otros componentes a su vez)
    En definitiva los componentes no serán más que una percepción propia y
    su complejidad y su profundidad así como su reutilización serán su
    mayor baluarte

    app.component.ts
    Será el componente de configuración de variables y objetos principal
    Se define evidentemente la clase del componente, que permite exportarlo al
    módulo
    Este componente se define en dos estructuras
*
* */



/* 
a) @ Component: Palabra reservada para la declaración de componentes,
      Va a constar de 3 elementos (con sus valores) principaes:
      a1: selector: el puntero o indicador de dónde se va a mostrar el componente
      a2: templateUrl: Conjunto de estructuras visuales que están definidas dentro de html
      a3: styleurls 
*/
@Component({
  selector: 'app-root',//Dónde
  templateUrl: './app.component.html',//Que
  styleUrls: ['./app.component.css']//Cómo
})
/* 
b) export class AppCOmponent
Serán en la acotacion del ambito de la Clase donde surgidas en desarrollarán declaraciones
De variables, propiedades del objeto, constructores y métodos
-export- Traslada y define el objeto al app.module.ts
*/
export class AppComponent {
  title = 'Primer ejercicio';
  titulo2:string='Curso CfC';
  titulo3:number
}
