export default class Proveedor{
    protected nombre :string;
    protected telefono :number;
    protected id : string;
    
    public constructor(nombre :string, telefono :number, id :string){
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }
    
    public getNombre(){
     return this.nombre;
    }
    public getTelefono(){
        return this.telefono;
    }
    public getId(){
        return this.id;
    }
}