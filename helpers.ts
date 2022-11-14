//Importo las clases
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'

//Importo las librerias que voy a utilizar
import * as ReadlineSync from 'readline-sync';

//Importo las funciones
import {clientes, pacientes} from './index';

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
    } else {
        console.log("El ID no se encuentra en la base de datos")
        modificar(lista, modificarObjeto);
    };
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
    } else {
        console.log("El ID no se encuentra en la base de datos")
        borrar(lista);
    };
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

