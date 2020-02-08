
export class Pokemon {
    private _id: number;
    private _nombre: string;
    private _imagen: string;
    private _habilidades: Array<any>;
    private _stats: Array<any>;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.imagen = '';
        this.habilidades = [];
        this.stats = [];
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get habilidades(): Array<any> {
        return this._habilidades;
    }
    public set habilidades(value: Array<any>) {
        this._habilidades = value;
    }

    public get stats(): Array<any> {
        return this._stats;
    }
    public set stats(value: Array<any>) {
        this._stats = value;
    }




}
