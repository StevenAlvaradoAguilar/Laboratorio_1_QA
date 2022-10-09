import { DetallePrestamo } from "./detalle-prestamo";
import { Socio } from "./socio";

export class Prestamo {
    private detalle:Array<DetallePrestamo>; 
    private socio:Socio|null;
    private LocalDateTime:Date;
    private id:number;
    private multa: number|null;
    private estado:string; //Activo, Cancelado, Finalizado

    constructor(){
        this.detalle = new Array<DetallePrestamo>();
        this.socio = null;
        this.LocalDateTime = new Date();
        this.id = -1;
        this.multa = null;
        this.estado = "Activo"
    }

    setId(id:number):void{
        this.id=id;
    }

    setEstado(e:string):void{
        this.estado = e;
    }

    setMulta(multa:number):void{
        this.multa=multa;
    }

    setDetalle(d:DetallePrestamo):void{
        this.detalle.push(d);
    }

    removerDetalle(det: DetallePrestamo) {
        const detalles = this.detalle;
        if (detalles.includes(det)) {
            detalles.splice(detalles.indexOf(det), 1);
            this.detalle = detalles;
        }
    }

    setSocio(socio:Socio):void{
        this.socio = socio;
    }

    setLocalDateTime(fecha:Date):void{
        this.LocalDateTime=fecha;
    }

    getEstado():string{
        return this.estado;
    }

    getLocalDateTime():Date{
        return this.LocalDateTime;
    }

    getId():number{
        return this.id;
    }

    getMulta():number|null{
        return this.multa;
    }

    getSocio():Socio|null{
        return this.socio;
    }

    getDetalle():Array<DetallePrestamo>{
        return this.detalle;
    }

    /**
     * Retorna el detalle de una posición espefica.
     * @param posicion el número de posición.
     * @return un objeto del tipo VentaDetalle.
     */
     public getDetalleInfo(posicion: number): DetallePrestamo {
        if (posicion < 1 || posicion > this.detalle.length) {
            throw new Error("Posición fuera de rango");
        }
        return this.detalle[posicion - 1];
    }

    calcularSubTotal():number{
        let subTotal=0.0;
        for (var i=0; i<this.detalle.length;i++){
            subTotal = subTotal + this.detalle[i].getSubTotal();            
        }
        return subTotal;
    }

    calcularImpuesto():number{
        let monto=0.0;
        for (var i=0; i<this.detalle.length;i++){
            monto = monto + this.detalle[i].getMontoIva();            
        }
        return monto;
    }

    calcularTotal():number{
        if(this.multa === null)
            return this.calcularSubTotal()+this.calcularImpuesto();
        else
            return this.calcularSubTotal()+this.calcularImpuesto() + this.multa;
    }

}
