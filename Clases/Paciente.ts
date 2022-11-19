//Creo la clase Paciente
export default class Paciente {
    private nombre :string;
    private especie :string;
    private id :string;

    public constructor(nombre :string, especie :string, id :string) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }

    public getNombre() :string {
        return this.nombre;
    }

    public getEspecie() :string {
        return this.especie;
    }

    public getId() :string {
        return this.id;
    }
}