import { DetallePrestamo } from "./detalle-prestamo";
import { Libro } from "./libro";
import { Prestamo } from "./prestamo";
import { Socio } from "./socio";

export class Biblioteca {
    private libros: Array<Libro>;
    private socios: Array<Socio>;
    private prestamos: Array<Prestamo>;
    private historialPrestamos: Array<Prestamo>;

    constructor() {
        this.libros = new Array<Libro>();
        this.socios = new Array<Socio>();
        this.prestamos = new Array<Prestamo>();
        this.historialPrestamos = new Array<Prestamo>();
    }

    setSocio(socio: Socio): void {
        this.socios.push(socio);
    }

    setPrestamo(prestamo: Prestamo): void {
        this.prestamos.push(prestamo);
    }

    setHistorialPrestamo(prestamo: Prestamo): void {
        this.historialPrestamos.push(prestamo);
    }

    setLibro(libro: Libro): void {
        this.libros.push(libro);
    }

    getPrestamos(): Array<Prestamo> {
        return this.prestamos;
    }

    getHistorialPrestamos(): Array<Prestamo> {
        return this.historialPrestamos;
    }

    getLibros(): Array<Libro> {
        return this.libros;
    }

    getSocios(): Array<Socio> {
        return this.socios;
    }

    buscarPosicionLibro(codigo: number): number {
        for (var i = 0; i < this.libros.length; i++) {
            if (this.libros[i].getCodigo() === codigo) {
                return i;
            }
        }
        return -1;
    }

    buscarPrestamoPorCodigo(codigo: number): Prestamo | null {
        for (var i = 0; i < this.prestamos.length; i++) {
            if (this.prestamos[i].getId() === codigo) {
                return this.prestamos[i];
            }
        }
        return null;
    }

    generarIdentificador(): number {
        var identificador: number = (Math.random() * 10000) + 1;
        for (var i = 0; i < this.prestamos.length; i++) {
            if (this.prestamos[i].getId() === identificador) {
                identificador = (Math.random() * 10000) + 1;
                i = 0;
            }
        }
        return identificador;
    }

    prestarLibro(libro: Libro, socio: Socio, cantidad: number) {
        var prestamo: Prestamo = new Prestamo();
        prestamo.setId(this.generarIdentificador());
        prestamo.setSocio(socio);
        var codigo: number | null = libro.getCodigo();
        if (codigo === null)
            return;

        var indice: number = this.buscarPosicionLibro(codigo);;

        if (indice == -1)
            return;

        this.libros[indice].setDisponible(false);
        var detalle = new DetallePrestamo();
        detalle.setId(1);
        detalle.setLibro(this.libros[indice]);
        detalle.setPrecio();
        detalle.setCantidad(cantidad);
        prestamo.setDetalle(detalle);
        this.prestamos.push(prestamo);
    }

    prestarLibros(libros: Array<Libro>, socio: Socio, cantidades: Array<number>) {
        if (libros.length === cantidades.length) {
            var prestamo: Prestamo = new Prestamo();
            prestamo.setId(this.generarIdentificador());
            prestamo.setSocio(socio);
            for (var i = 0; i < this.libros.length; i++) {
                var indice: number;
                var codigo: number  = libros[i].getCodigo();                if (codigo === -1)
                    return;

                indice = this.buscarPosicionLibro(codigo);;

                if (indice == -1)
                    return;

                this.libros[indice].setDisponible(false);
                var detalle = new DetallePrestamo();
                detalle.setId(i + 1);
                detalle.setLibro(this.libros[indice]);
                detalle.setPrecio();
                detalle.setCantidad(cantidades[i]);
                prestamo.setDetalle(detalle);
                this.prestamos.push(prestamo);
            }
        }
        else
            throw new Error("El tamaño de la lista de libros y de cantidades debe ser igual");
    }

    devolverPrestamo(id: number): void {
        const prestamos = this.prestamos;
        let p = this.buscarPrestamoPorCodigo(id);
        if (p !== null) {
            if (prestamos.includes(p)) {
                p.setEstado("Finalizado");
                prestamos.splice(prestamos.indexOf(p), 1);
                this.prestamos = prestamos;
                this.historialPrestamos.push(p);
            }
        }
    }

    cantidadPrestamosDeUnSocio(cedula: number): number {
        var cantidad: number = 0;
        for (var i = 0; i < this.prestamos.length; i++) {
            var socio: Socio | null = this.prestamos[i].getSocio();
            if (socio != null) {
                if (socio.getCedula() === cedula) {
                    cantidad++;
                }
            }
        }
        return cantidad;
    }
}
