//Importo las clase
import SucursalVeterinaria from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'
import GestorDeArchivos from './lector'

//Importo las funciones
import {cargarClientes, cargarPacientes, cargarProveedor, cargarSucursal} from './lector';
import { generarId, modificar, borrar, agregarPaciente, modificarPaciente, mostrarPacientes, agregarCliente, modificarCliente, mostrarClientes, agregarProveedor, mostrar, agregarSucursal, modificarProveedor, modificarSucursal } from './helpers';
import * as ReadlineSync from 'readline-sync';

//Creo los arreglos que voy a utilizar
export let sucursales :Array<SucursalVeterinaria> = [];
export let proveedores :Array<Proveedor> = [];
export let clientes :Array<Cliente> = [];
export let pacientes :Array<Paciente> = [];

//Preparo la informacion de ejemplo
let datosSucursales: GestorDeArchivos = new GestorDeArchivos("txt/sucursales.txt");
let datosProveedores: GestorDeArchivos = new GestorDeArchivos("txt/proveedores.txt");
let datosClientes: GestorDeArchivos = new GestorDeArchivos("txt/clientes.txt");
let datosPacientes: GestorDeArchivos = new GestorDeArchivos("txt/pacientes.txt");

//Cargo la informacion de ejemplo a los arreglos correspondientes
//Sucursales
for (let i :number = 0; i < datosSucursales.getArregloTxt().length; i++){
    cargarSucursal(datosSucursales.getArregloTxt()[i], sucursales);
};
//Proveedores
for (let i :number = 0; i < datosProveedores.getArregloTxt().length; i++){
    cargarProveedor(datosProveedores.getArregloTxt()[i], proveedores);
};
//Clientes
for (let i :number = 0; i < datosClientes.getArregloTxt().length; i++){
    cargarClientes(datosClientes.getArregloTxt()[i], clientes);
};
//Pacientes
for (let i :number = 0; i < datosPacientes.getArregloTxt().length; i++){
    cargarPacientes(datosPacientes.getArregloTxt()[i], pacientes);
};

let opcion: number = -1;
while (opcion != 0) {
    console.log("-------------------------------------");
    console.log("1 - Mostrar clientes");
    console.log("2 - Cargar cliente")
    console.log("3 - Modificar cliente");
    console.log("4 - Borrar cliente");
    console.log("5 - Mostrar proveedores");
    console.log("6 - Cargar proveedor");
    console.log("7 - Modificar proveedor");
    console.log("8 - Borrar proveedor");
    console.log("9 - Mostrar sucursales");
    console.log("10 - Cargar sucursal");
    console.log("11 - Modificar sucursal");
    console.log("12 - Borrar sucursal");

    console.log("0 - Salir");
    console.log("-------------------------------------");

    opcion = (ReadlineSync.questionInt("Ingrese opcion: "));
    switch (opcion) {
        case 1:
            mostrarClientes();
            break;
        case 2:
            agregarCliente(clientes);
            break;
        case 3:
            try {
                modificarCliente(ReadlineSync.question("Ingrese el ID a modificar: "));
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
        case 4:
            try {
                borrar(clientes);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
                borrar(clientes);
            }
            break;
        case 5:
            mostrar(proveedores);
            break;
        case 6:
            agregarProveedor(proveedores);
            break;
        case 7:
            try {
                modificarProveedor(ReadlineSync.question("Ingrese el ID a modificar: "));
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
        case 8:
            try {
                borrar(proveedores);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
                borrar(proveedores);
            }
            break;
        case 9:
            mostrar(sucursales);
            break;
        case 10:
            agregarSucursal(sucursales);
            break;
        case 11:
            try {
                modificarSucursal(ReadlineSync.question("Ingrese el ID a modificar: "));
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
        case 12:
            try {
                borrar(sucursales);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
                borrar(sucursales);
            }
            break;

    }

}
console.log("Usted a salido del programa");