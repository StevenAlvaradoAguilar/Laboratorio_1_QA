import { Libro } from "./libro";

export class DetallePrestamo {
    private id:number;
    private libro:Libro;
    private cantidad:number;
    private precio: number;
    private porcenIva:number;
    private montoIva:number;
    

    constructor(){
        this.id = -1;
        this.libro = new Libro();
        this.cantidad = 0;
        this.precio = 0.0;
        this.porcenIva = 13;
        this.montoIva = 0.0;
    }

    setId(id:number){
        this.id = id;
    }

    setLibro(l:Libro){
        this.libro = l;        
    }

    setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }

    setPrecio(){
        if(this.libro !== null ){
            this.precio = this.libro.getPrecio();
        }
    }

    setPorcenIva(porcenIva:number){
        this.porcenIva = porcenIva;
        this.setMontoIva();
    }

    setMontoIva(){
        this.montoIva = this.cantidad * this.precio * (this.porcenIva / 100);
    }

    getPorcenIva():number{
        return this.porcenIva;
    }

    getMontoIva():number{
        return this.montoIva;
    }

    getId():number{
        return this.id;
    }

    getLibro():Libro{
        return this.libro;
    }

    getCantidad():number{
        return this.cantidad;
    }

    getPrecio():number{
        return this.precio;
    }

    public getSubTotal():number{
        return this.cantidad * this.precio;
    }
}
