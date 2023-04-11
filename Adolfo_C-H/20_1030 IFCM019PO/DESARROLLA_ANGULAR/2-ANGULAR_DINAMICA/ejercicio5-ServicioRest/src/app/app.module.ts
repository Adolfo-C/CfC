import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
 Comunicaciones generales para las conexiones http
  1º HttpClientModule
*/
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
/* Importacion de servicio creado ⇓ */
import { FormsModule } from '@angular/forms';

import { PokemonService } from './servicio/pokemon.service';

/* Libreria de formularios */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  /* Declaración de los servicios ⇓ */
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
