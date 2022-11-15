//Importo las clases
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'
import Sucursal from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'

//Importo las librerias que voy a utilizar
import * as ReadlineSync from 'readline-sync';

//Importo las funciones
import {clientes, pacientes, proveedores, sucursales} from './index';

//Función para crear y verificar el ID
export let generarId = (lista) => {
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
            generarId(lista);
        }
    };
    
    return idGenerado;
}

export let mostrar = (lista):void =>{
    for(let i=0; i< lista.length;i++){
        console.log(lista[i]);
}
}

class ErrorId extends Error{
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}

//Funcion para modificar
export let modificar = (lista, modificarObjeto) => {
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
    } else {
        //throw new ErrorId("El ID no se encuentra en la base de datos");
        console.log("El ID no se encuentra en la base de datos");
        modificar(lista, modificarObjeto);    
    }
}

//Funcion para borrar
export let borrar = (lista) => {
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
    } else {
        //throw new ErrorId("El ID no se encuentra en la base de datos");
        console.log("El ID no se encuentra en la base de datos");
        borrar(lista);
    }
         
}

//----------------------------CLIENTE-----------------------------------

//Función para agregar un cliente
export let agregarCliente = (clientes: Array<Cliente>) :void => {
    let nombre :string = ReadlineSync.question("Ingrese el nombre del cliente: ");
    let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
    let id :string = generarId(clientes);
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

        pacientes.push(nuevoPaciente);
    }
    let nuevoCliente : Cliente = new Cliente(nombre, telefono, id);
    console.log("Su ID es: " + id);

    clientes.push(nuevoCliente);
}

//Funcion para modificar un cliente
export let modificarCliente = (idOriginal) => {
    let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del cliente: ");
    let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
    let id :string = idOriginal;
    let clienteModificado : Cliente = new Cliente(nombre, telefono, id);
    
    return clienteModificado;
}

//Función para mostrar los clientes
export let mostrarClientes = () :void => {
    for (let i :number = 0; i < clientes.length; i++){
        console.log("Nombre: " + clientes[i].getNombre());
        console.log("Telefono: " + clientes[i].getTelefono());
        console.log("ID: " + clientes[i].getId());
        clientes[i].getVip();
        console.log("Cantidad de mascotas: " + clientes[i].cantidadMascotas())
        console.log("Mascotas: ");
        clientes[i].mostrarMascotas();
    };
}

//----------------------------PACIENTES-----------------------------------

let id :string = "";

//Función para crear un paciente
export let agregarPaciente = (pacientes: Array<Paciente>) :void => {
    let nombre :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
    let especie :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
    if (especie !== "perro"){
        if (especie !== "gato"){
            if (especie !== "exotica"){
                especie = "exotica";
            };
        };
    };
    let id :string = idMascota();
    let nuevoPaciente : Paciente = new Paciente(nombre, especie, id);

    pacientes.push(nuevoPaciente);
}

//Funcion para validar el ID del dueño
export let idMascota = () => {
    let idCliente :string = ReadlineSync.question("Ingrese el ID del dueno: ");
    for (let i :number = 0; i < clientes.length; i++){
        if (idCliente === clientes[i].getId()){
            id = clientes[i].getId();
        };
        if (id === ""){
            console.log("ID invalido");
            idMascota();
        };
    };
    return id;
}

//Funcion para modificar un paciente
export let modificarPaciente = (idOriginal) => {
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

//Función para mostrar los pacientes
export let mostrarPacientes = () :void => {
    for (let i :number = 0; i < pacientes.length; i++){
        console.log("Nombre: " + pacientes[i].getNombre());
        console.log("Especie: " + pacientes[i].getEspecie());
        console.log("ID: " + pacientes[i].getId());
    };
}

//----------------------------PROVEEDORES--------------------------------

export let agregarProveedor = (proveedor: Array<Proveedor>) :void => {
    let nombre :string = ReadlineSync.question("Ingrese el nombre del proveedor: ");
    let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
    let id :string = generarId(proveedor);
    let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);

    proveedor.push(nuevoProveedor);
    console.log("Su ID de proveedor es: " + id);
}
 
export let modificarProveedor = (idOriginal: string) => {
    let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del proveedor: ");
    let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
    let id :string = idOriginal;
    let proveedorModificado : Proveedor = new Proveedor(nombre, telefono, id);

    return proveedorModificado;
}

//Función para mostrar los proveedores
export let mostrarProveedores = () :void => {
    for (let i :number = 0; i < proveedores.length; i++){
        console.log("Nombre: " + proveedores[i].getNombre());
        console.log("Telefono: " + proveedores[i].getTelefono());
        console.log("ID: " + proveedores[i].getId());
    }
}

//----------------------------SUCURSALES--------------------------------

export let agregarSucursal = (sucursal: Array<Sucursal>) :void => {
    let nombre :string = ReadlineSync.question("Ingrese el nombre de sucursal: ");
    let direccion :string = ReadlineSync.question("Ingrese direccion: ");
    let id :string = generarId(sucursal);
    let nuevoSucursal: Sucursal = new Sucursal(nombre, direccion, id);

    sucursal.push(nuevoSucursal);
    console.log("Su ID de sucursal es: " + id);
}

export let modificarSucursal = (idOriginal: string) => {
    let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre de sucursal: ");
    let direccion :string = ReadlineSync.question("Ingrese la nueva direccion: ");
    let id :string = idOriginal;
    let sucursalModificado : Sucursal = new Sucursal(nombre, direccion, id);

    return sucursalModificado;
}

//Función para mostrar los sucursales
export let mostrarSucursales = () :void => {
    for (let i :number = 0; i < sucursales.length; i++){
        console.log("Nombre: " + sucursales[i].getNombre());
        console.log("Direccion: " + sucursales[i].getDireccion());
        console.log("ID: " + sucursales[i].getId());
    };
}

//----------------------------RED--------------------------------

//Función para mostrar la red
export let mostrarRed = () :void => {
    console.log("-------------------------------------");
    console.log("SUCURSALES");
    console.log("-------------------------------------");
    mostrarSucursales();
    console.log("-------------------------------------");
    console.log("PROVEEDORES");
    console.log("-------------------------------------");
    mostrarProveedores();
    console.log("-------------------------------------");
    console.log("CLIENTES");
    console.log("-------------------------------------");
    mostrarClientes();
}