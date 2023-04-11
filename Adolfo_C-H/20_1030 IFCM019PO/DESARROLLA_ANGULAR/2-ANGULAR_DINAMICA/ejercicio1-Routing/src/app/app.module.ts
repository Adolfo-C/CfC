import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Componente1Component } from './componentesGlobales/componente1/componente1.component';
import { Componente2Component } from './componentesGlobales/componente2/componente2.component';
import { Componente3Component } from './componentesGlobales/componente3/componente3.component';
/* Integración de un componente, servicio, ...importación y declaración (componente secundario)*/
import { SecundarioComponent } from './componentesGlobales/secundario/secundario.component';

/* RUTAS
I]Parte de la idea de constructo en comportamiento de lectura de elemento,
las rutas tendrán este estructura, Array
II]Requisitos necesarios para configurar las rutas:
1-.Routes
  Ofrece las HERRAMIENTAS necesarias para las rutas; establece todas las directivas que permiten
  implantar las rutas(la navegación) en nuestra aplicación.
  En otras principales enviar y recibir parámetros[Params]
2-.RouterModule
  Generará la comunicación en propio componente, asignará ruta. Definiremos dos elementos:
    a)const nombreRutas:
    b)línea de la ruta, definida por el parámetro path
      CREAMOS RUTAS(Array)
            ⇓
 */
const misRutas: Routes =[
{path:'inicio',component:InicioComponent},
{path:'c1',component:Componente1Component},
{path:'c2',component:Componente2Component},
{path:'c3/:alpha',component:Componente3Component},//Parameto para configurar rutas (generando el parámetro)
{path:'',redirectTo:'inicio',pathMatch:'full'},//Herramientas de configurar página principal
{path:'**',component:ErrorComponent}//Ruta de error, cuando falla la lectura de ruta{path:'**',component:ErrorComponent} path:'error#'
];

/*  
    III] Importaciones de las librerías
Las librerías están dentro de @angular/router
                ⇓
*/
import { Routes,RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    SecundarioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
