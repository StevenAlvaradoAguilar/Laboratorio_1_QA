export class Autor {
    private identificador: number |null;
    private nombre: string;
    private apellidos: string;
    private fechaNacimiento: string;
    private createdOn: string;
    private nacionalidad:string;

    constructor(){
        this.identificador = null;
        this.nombre = "";
        this.apellidos = "";
        this.fechaNacimiento = "";
        this.createdOn = "";
        this.nacionalidad="";
    }

    setIdentificador(ced:number){
        this.identificador = ced;
    }

    setFechaNacimiento(fecha:string){
        this.fechaNacimiento = fecha;
    }

    setCreatedOn(createdOn:string){
        this.createdOn = createdOn;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setApellidos(apellidos:string){
        this.apellidos = apellidos;
    }

    setNacionalidad(nacionalidad:string){
        this.nacionalidad=nacionalidad;
    }

    getNombre():string{
        return this.nombre;
    }

    getApellidos():string{
        return this.apellidos;
    }

    getFechaNacimiento():string{
        return this.fechaNacimiento;
    }

    getCreatedOn():string{
        return this.createdOn;
    }

    getNacionalidad():string{
        return this.nacionalidad;
    }

    getIdentificador():number|null{
        return this.identificador;
    }
}