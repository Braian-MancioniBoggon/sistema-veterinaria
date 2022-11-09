//Creo la clase Cliente
export default class Cliente {
    private nombre :string;
    private telefono :number;
    private vip :boolean;
    private id :string;
    private registroVisitas :number;

    public constructor(nombre :string, telefono :number, id :string) {
        this.nombre = nombre;
        this.vip = false;
        this.telefono = telefono;
        this.id = id;
        this.registroVisitas = 0;
    }

    public getNombre() :string {
        return this.nombre;
    }

    public getTelefono() :number {
        return this.telefono;
    }

    public getVip() :void {
        if (!this.vip){
            console.log("Vip: no");
        } else {
            console.log("Vip: si");
        }
    }

    public obtenerVip() :void{
        this.registroVisitas++;
        if (this.registroVisitas >= 5){
            this.vip = true;
        };
    }

    public otorgarVip() :void{
        this.vip = true;
    }

    public getId() :string {
        return this.id;
    }

    public mostrarMascotas = (pacientes) :void => {
        //Recorro el arreglo de pacientes
        for (let i :number = 0; i < pacientes.length; i++){
            //Busco coincidencia con el ID del cliente para mostrar solo sus mascotas por consola
            if (this.id === pacientes[i].getId()){
                console.log("   -Nombre de la mascota: " + pacientes[i].getNombre());
                console.log("    Especie: " + pacientes[i].getEspecie());
            };
        };
    }

    public cantidadMascotas = (pacientes) :number =>{
        let cantidad :number = 0;
        //Recorro el arreglo de pacientes
        for (let i :number = 0; i < pacientes.length; i++){
            //Busco coincidencia con el ID del cliente para contar las mascotas que tiene
            if (this.id === pacientes[i].getId()){
                cantidad ++;
            };
        };

        return cantidad;
    }

    public getRegistroVisitas() :number {
        return this.registroVisitas;
    }
}