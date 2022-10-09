import { Autor } from "./autor";

export class Libro {
    private codigo: number;
    private titulo: string;
    private autores: Array<Autor>;
    private disponible: boolean;
    private precio: number;
    private createdOn: string;

    constructor() {
        this.codigo = -1;
        this.titulo = "";
        this.autores = new Array<Autor>();
        this.disponible = true;
        this.precio = 0.0;
        this.createdOn = "";
    }
    setCreatedOn(createdOn: string) {
        this.createdOn = createdOn;
    }

    getCreatedOn(): string {
        return this.createdOn;
    }

    setPrecio(p: number): void {
        this.precio = p;
    }

    setCodigo(codigo: number): void {
        this.codigo = codigo;
    }
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setAutor(autor: Autor): void {
        this.autores.push(autor);
    }

    setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }

    getPrecio(): number {
        return this.precio;
    }

    getCodigo(): number {
        return this.codigo;
    }

    getDisponible(): boolean {
        return this.disponible;
    }

    getAutores(): Array<Autor> {
        return this.autores;
    }

    getAutor(identificador: number): Autor | null {
        for (var i = 0; i < this.autores.length; i++) {
            if (this.autores[i].getIdentificador() === identificador) {
                return this.autores[i];
            }
        }
        return null;
    }

    getTitulo(): string {
        return this.titulo;
    }

}