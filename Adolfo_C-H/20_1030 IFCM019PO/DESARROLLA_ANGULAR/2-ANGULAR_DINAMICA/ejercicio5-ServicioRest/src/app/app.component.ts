import { Component } from '@angular/core';
import { PokemonService } from './servicio/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio5: ServicioRest';
  //variables del PokemonService
  nombre: string = '';
  pokemons: any = [];
  pokemon: any = null;
  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos: any) => {
      this.pokemons = datos.results;//metódo results de datos
    });
  }
  buscar() {
    this.pokemonService.buscar(this.nombre).subscribe((item)=>{
      this.pokemon=item;
      return null;
    });
  }





}
