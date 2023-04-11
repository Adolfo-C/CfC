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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
/* Libreria de formularios */
import { FormsModule } from '@angular/forms';
/* Importacion de servicio creado ⇓ */
import { PokemonService } from './servicio/pokemon.service';
/* Importacion de firebase */
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';

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
    MatSlideToggleModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  /* Declaración de los servicios ⇓ */
  providers: [PokemonService,AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
