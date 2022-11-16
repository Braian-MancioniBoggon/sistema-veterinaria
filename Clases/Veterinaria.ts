//Importo las clases
import Sucursal from './Sucursal'
import Proveedor from './Proveedor'
import Cliente from './Cliente'
import Paciente from './Paciente'

//Importo las librerias que voy a utilizar
import * as ReadlineSync from 'readline-sync';

//Importo las funciones
import {clientes, pacientes, proveedores, sucursales} from '../index';

//Creo la clase Veterinaria
export default class Veterinaria {
    private sucursales :Array <Sucursal>;
    private listaProveedores :Array <Proveedor>;
    private listaClientes :Array <Cliente>;
    private listaPacientes :Array <Paciente>;
    private idPaciente :string;
    private intentos :number;

    public constructor(sucursales :Array <Sucursal>, listaProveedores :Array <Proveedor>, listaClientes :Array <Cliente>, listaPacientes :Array <Paciente>) {
        this.sucursales = sucursales;
        this.listaProveedores = listaProveedores;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
        this.idPaciente = "";
        this.intentos = 0;
    }

    public mostrarSucursales() :void {
        for (let i :number = 0; i < this.sucursales.length; i++){
            console.log("Nombre: " + this.sucursales[i].getNombre());
            console.log("Direccion: " + this.sucursales[i].getDireccion());
            console.log("ID: " + this.sucursales[i].getId());
            console.log("");
        };
    }

    public mostrarProveedores() :void {
        for (let i :number = 0; i < this.listaProveedores.length; i++){
            console.log("Nombre: " + this.listaProveedores[i].getNombre());
            console.log("Telefono: " + this.listaProveedores[i].getTelefono());
            console.log("ID: " + this.listaProveedores[i].getId());
            console.log("");
        }
    }

    public mostrarClientes() :void {
        for (let i :number = 0; i < this.listaClientes.length; i++){
            console.log("Nombre: " + this.listaClientes[i].getNombre());
            console.log("Telefono: " + this.listaClientes[i].getTelefono());
            console.log("ID: " + this.listaClientes[i].getId());
            this.listaClientes[i].getVip();
            console.log("Cantidad de mascotas: " + this.listaClientes[i].cantidadMascotas())
            console.log("Mascotas: ");
            this.listaClientes[i].mostrarMascotas();
            console.log("");
        };
    }

    public mostrarPacientes() :void {
        for (let i :number = 0; i < this.listaPacientes.length; i++){
            console.log("Nombre: " + this.listaPacientes[i].getNombre());
            console.log("Especie: " + this.listaPacientes[i].getEspecie());
            console.log("ID: " + this.listaPacientes[i].getId());
            console.log("");
        };
    }

    public mostrarRed() :void {
        console.log("-------------------------------------");
        console.log("SUCURSALES");
        console.log("-------------------------------------");
        this.mostrarSucursales();
        console.log("-------------------------------------");
        console.log("PROVEEDORES");
        console.log("-------------------------------------");
        this.mostrarProveedores();
        console.log("-------------------------------------");
        console.log("CLIENTES");
        console.log("-------------------------------------");
        this.mostrarClientes();
    }

    public modificar (lista, modificarObjeto) {
        let eleccionId :string = ReadlineSync.question("Ingrese el ID a modificar: ");
        let coincidencia :number = 0;
        let posicionArreglo :number = 0;
        if (lista === pacientes){
            let eleccionNombre :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
            for (let i :number = 0; i < lista.length; i++){
                if (eleccionId === lista[i].getId() && eleccionNombre === lista[i].getNombre()){
                    coincidencia = 1;
                    posicionArreglo = i;
                };
            };
        } else {
            for (let i :number = 0; i < lista.length; i++){
                if (eleccionId === lista[i].getId()){
                    coincidencia = 1;
                    posicionArreglo = i;
                };
            };
        };
        if (coincidencia === 1){
            let objetoModificado = modificarObjeto(lista[posicionArreglo].getId());
            delete lista[posicionArreglo];
            lista[posicionArreglo] = objetoModificado;
            console.log("Modificado exitosamente");
        } else if (this.intentos < 2){
            //throw new ErrorId("El ID no se encuentra en la base de datos");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            this.intentos++;
            this.modificar(lista, modificarObjeto);  
        } else {
            this.intentos = 0;
            console.log("Limite de intentos exedido");
        }
    }

    public modificarCliente (idOriginal) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del cliente: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
        let id :string = idOriginal;
        let clienteModificado : Cliente = new Cliente(nombre, telefono, id);
        
        return clienteModificado;
    }

    public modificarPaciente (idOriginal) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre de la mascota: ");
        let especie :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
        if (especie !== "perro"){
            if (especie !== "gato"){
                if (especie !== "exotica"){
                    especie = "exotica";
                };
            };
        };
        let id :string = idOriginal;
        let pacienteModificado : Paciente = new Paciente(nombre, especie, id);
        
        return pacienteModificado;
    }

    public modificarProveedor (idOriginal: string) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del proveedor: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
        let id :string = idOriginal;
        let proveedorModificado : Proveedor = new Proveedor(nombre, telefono, id);
    
        return proveedorModificado;
    }

    public modificarSucursal (idOriginal: string) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre de sucursal: ");
        let direccion :string = ReadlineSync.question("Ingrese la nueva direccion: ");
        let id :string = idOriginal;
        let sucursalModificado : Sucursal = new Sucursal(nombre, direccion, id);
    
        return sucursalModificado;
    }

    public borrar (lista) {
        let eleccionId :string = ReadlineSync.question("Ingrese el ID a eliminar: ");
        let coincidencia :number = 0;
        let posicionArreglo :number = 0;
        if (lista === pacientes){
            let eleccionNombre :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
            for (let i :number = 0; i < lista.length; i++){
                if (eleccionId === lista[i].getId() && eleccionNombre === lista[i].getNombre()){
                    coincidencia = 1;
                    posicionArreglo = i;
                };
            };
        } else {
            for (let i :number = 0; i < lista.length; i++){
                if (eleccionId === lista[i].getId()){
                    coincidencia = 1;
                    posicionArreglo = i;
                };
            };
        };
        if (coincidencia === 1){
            lista.splice(posicionArreglo,1);
            console.log("El ID fue eliminado exitosamente!")
        } else if (this.intentos < 2){
            //throw new ErrorId("El ID no se encuentra en la base de datos");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            this.intentos++;
            this.borrar(lista);  
        } else {
            this.intentos = 0;
            console.log("Limite de intentos exedido");
        }
             
    }

    public generarId (lista) {
        //Inicializo la variable que va a contener el ID de 4 digitos
        let idGenerado :string = "";
        //Genero un numero pseudoaleatorio para ir concatenandolos dentro de la variable hasta llegar al ID de 4 digitos
        for (let i :number = 0; i < 4; i++){
            let random :number = Math.floor(Math.random() * 10);
            idGenerado += random;
        };
        //Recorro el arreglo que sea necesario para corroborar que el ID no se repita
        for (let i :number = 0; i < lista.length; i++){
            //Si el ID se repite vuelvo a generar otro y se corrobora
            if (idGenerado === lista[i].getId()){
                this.generarId(lista);
            }
        };
        
        return idGenerado;
    }

    public agregarCliente () :void {
        let nombre :string = ReadlineSync.question("Ingrese el nombre del cliente: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
        let id :string = this.generarId(this.listaClientes);
        let mascotas :number = ReadlineSync.questionInt("Cantidad de mascotas: ");
        for (let i :number = 0; i < mascotas; i++){
            let nombreMascota :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
            let especieMascota :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
            if (especieMascota != "perro"){
                if (especieMascota !== "gato"){
                    if (especieMascota !== "exotica"){
                        especieMascota = "exotica";
                    };
                };
            };
            let idMascota :string = id;
            let nuevoPaciente : Paciente = new Paciente(nombreMascota, especieMascota, idMascota);
    
            this.listaPacientes.push(nuevoPaciente);
        }
        let nuevoCliente : Cliente = new Cliente(nombre, telefono, id);
        console.log("Su ID es: " + id);
    
        this.listaClientes.push(nuevoCliente);
    }

    public agregarPaciente () :void {
        let nombre :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
        let especie :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
        if (especie !== "perro"){
            if (especie !== "gato"){
                if (especie !== "exotica"){
                    especie = "exotica";
                };
            };
        };
        let id :string = this.idMascota();
        let nuevoPaciente : Paciente = new Paciente(nombre, especie, id);
    
        this.listaPacientes.push(nuevoPaciente);
    }
    
    public idMascota () {
        let idCliente :string = ReadlineSync.question("Ingrese el ID del dueno: ");
        for (let i :number = 0; i < this.listaClientes.length; i++){
            if (idCliente === this.listaClientes[i].getId()){
                this.idPaciente = this.listaClientes[i].getId();
            };
            if (this.idPaciente === ""){
                console.log("ID invalido");
                this.idMascota();
            };
        };
        return this.idPaciente;
    }

    public agregarProveedor () :void {
        let nombre :string = ReadlineSync.question("Ingrese el nombre del proveedor: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
        let id :string = this.generarId(this.listaProveedores);
        let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
    
        this.listaProveedores.push(nuevoProveedor);
        console.log("Su ID de proveedor es: " + id);
    }

    public agregarSucursal () :void {
        let nombre :string = ReadlineSync.question("Ingrese el nombre de sucursal: ");
        let direccion :string = ReadlineSync.question("Ingrese direccion: ");
        let id :string = this.generarId(this.sucursales);
        let nuevoSucursal: Sucursal = new Sucursal(nombre, direccion, id);
    
        this.sucursales.push(nuevoSucursal);
        console.log("Su ID de sucursal es: " + id);
    }

}