import { Injectable } from '@angular/core';
import { Ipokemon } from './ipokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements Ipokemon {
  
  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }

  getAllPokemon(): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    console.trace('pokemonServce getPokemon ' + url);
    return this.http.get(url); //devuelve un observable
  }
  
  getPokemon(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
    console.trace('PokemonService' + url);
    return this.http.get(url);
  }
  
  getHabilidad(nombreHabilidad: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }

  getStat(nombreStat: string): Observable<any> {
    throw new Error("Method not implemented.");
  }
  
}
