import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/modelo/pokemon';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: Array<Pokemon>;
  pokemon: Pokemon;
  statsNames: Array<any>;
  p1:any;
  p2:any;


  constructor(private pokemonService: PokemonService) {

    this.pokemon = new Pokemon();
    this.pokemons = [];
    this.statsNames = [];
    this.p1 = {};
    this.p2 = {};

  

   }//constructor

  ngOnInit(): void {
    
    console.trace('ngOnInit PokemonComponent');

    this.pokemonService.getAllPokemon().subscribe(

      (data) => {
        
        console.debug('peticion correcta data %o', data);
        

        for (const p of data.results) { 
          this.pokemonService.getPokemon(p.name).subscribe(
            (data) => {
              this.pokemons.push(data);
              this.p1  = this.pokemons[0];
              this.p2 = this.pokemons[1];
              this.statsNames.push(p.stats.stat.name );

            },
            (error) => {
              console.warn('peticion erronea error %o', error);
            },
            () => {
              console.trace('esto se hace siempre');
            }
          );
        }

      },
      (error) => {
        console.warn('peticion erronea error %o', error);
      },
      () => {
        console.trace('esto se hace siempre');
      }

    );


  }//ngOnInit


  seleccionarPrimero(p) {
    console.log(p);
   this.p2= this.p1;
   this.p1 = p;
   
  
  }

}//PokemonComponent
