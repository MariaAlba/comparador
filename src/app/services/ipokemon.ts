import { Observable } from 'rxjs';

export interface Ipokemon {
    /**
     * @see GET /api/v2/pokemon/
     */
    getAllPokemon(): Observable<any>;

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre : string nombre del pokemon a buscar
     * @see GET https://pokeapi.co/api/v2/pokemon/{id}/
     */
    getPokemon(nombre: string): Observable<any>;

    /**
     * @param nombreHabilidad: nombre de habilidad en inglés
     * @see GET /api/v2/ability/{name}/
     */
    getHabilidad(nombreHabilidad: string): Observable<any>;
    
    getStat(nombreStat: string): Observable<any>;
}
