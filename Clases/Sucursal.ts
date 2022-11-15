export default class Sucursal {
    protected nombre :string;
    protected direccion :string;
    protected id : string;
    
    public constructor(nombre :string, direccion :string, id :string){
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }
    
    public getNombre(){
     return this.nombre;
    }
    public getDireccion(){
        return this.direccion;
    }
    public getId(){
        return this.id;
    }
}