/*
              MODULO/s
        Lo definiremos desde las características y las categorías
        que lo configura:
        i) Caracteristicas:
        i.1: La unidad configuración más grande en la que se puede dividir
        una aplicación
        i.2: Su capacidad de reutilizacion: reciclaje y uso
        i.3: Conexión con otros módulos, Asociados que nos suelen ofrecer recursos
        Añadidos o competencias necesaria
        i.2.a: Nativas (Angular Material)
        i.3.b: Terceros
          -free (HttpRequest, apis Browser.....)
          -value ()
        i.3.c: Propias

*/
import { NgModule } from '@angular/core';//1
import { AppComponent } from './app.component';//2
import { BrowserModule } from '@angular/platform-browser';//3

/* 
@NgModule, Palabra reservada para la declaracion de los modulos:
consta de 4 ARRAYS(Matrices)
1º declarations, han de pasar lista a la declaracion de todos los componentes.
Esta permite el acceso a su contenido
2º Importaciones: librerias y recursos dentro de un modulo necesarios
para acceder a determinador recursos
3º providers: Servicios (login, BBDD)
4º bootstrap: componente de inicio
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//principal
})
export class AppModule { }


/* ⇓
  carpeta assets
  -archivos de imagenes,...contenidos multimedia
  -archivos i18n
  -archivos de otros servicios
*/
/*  */
