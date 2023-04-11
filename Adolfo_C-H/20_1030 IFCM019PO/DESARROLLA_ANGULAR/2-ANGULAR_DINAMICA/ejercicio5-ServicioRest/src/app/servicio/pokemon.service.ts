//importación con (ctrl+.) con sugerencia Visual o forzando
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//-----------------Declaración del servicio--------------\\
export class PokemonService {
  //1º Variables
  url = 'https://pokeapi.co/api/v2/pokemon/';
  cabecera = new HttpHeaders({ "Content-type": "application/json" });
  //2º Llamadas get y post
  constructor(private respuesta: HttpClient) { }
  //3º Acceso a la Api y muestra de datos
  public getAll() {
    return this.respuesta.get(this.url, { headers: this.cabecera })

  }
  public buscar(nombre: string) {
    let otraurl = this.url + nombre + '/';
    return this.respuesta.get(otraurl, { headers: this.cabecera })
  }
}
