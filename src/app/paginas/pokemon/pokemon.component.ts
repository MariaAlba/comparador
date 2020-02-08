import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/modelo/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: Array<Pokemon>;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {

    this.pokemon = new Pokemon();
    this.pokemons = [];

   }//constructor

  ngOnInit(): void {
    
    console.trace('ngOnInit PokemonComponent');

    this.pokemonService.getAllPokemon().subscribe(

      (data) => {
        
        console.debug('peticion correcta data %o', data);
        this.pokemons = data.results;

      },
      (error) => {
        console.warn('peticion erronea error %o', error);
      },
      () => {
        console.trace('esto se hace siempre');
      }

    );


  }//ngOnInit

}//PokemonComponent
