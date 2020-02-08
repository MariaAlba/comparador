import { Observable } from 'rxjs';

export interface Ipokemon {
    /**
     * @see GET /api/v2/pokemon/
     */
    getAllPokemon(): Observable<any>;

    /**
     * @param nombreHabilidad: nombre de habilidad en inglés
     * @see GET /api/v2/ability/{name}/
     */
    getHabilidad( nombreHabilidad: string): Observable<any>;
}
