//Importo las clase
import Veterinaria from './Clases/Veterinaria'
import Sucursal from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'
import GestorDeArchivos from './lector'

//Importo las funciones
import {cargarClientes, cargarPacientes, cargarProveedor, cargarSucursal} from './lector';
import * as ReadlineSync from 'readline-sync';

//Creo los arreglos que voy a utilizar
export let sucursales :Array<Sucursal> = [];
export let proveedores :Array<Proveedor> = [];
export let clientes :Array<Cliente> = [];
export let pacientes :Array<Paciente> = [];
export let red :Veterinaria = new Veterinaria (sucursales, proveedores, clientes, pacientes);

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
            //mostrarClientes();
            red.mostrarClientes();
            break;
        case 2:
            red.agregarCliente();
            break;
        case 3:
            try {
                //modificarCliente(ReadlineSync.question("Ingrese el ID a modificar: "));
                //modificar(clientes,modificarCliente);
                red.modificar(clientes, red.modificarCliente);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
        case 4:
            try {
                red.borrar(clientes);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
                red.borrar(clientes);
            }
            break;
        case 5:
            //mostrarProveedores();
            red.mostrarProveedores();
            break;
        case 6:
            red.agregarProveedor();
            break;
        case 7:
            try {
                //modificarProveedor(ReadlineSync.question("Ingrese el ID a modificar: "));
                //modificar(proveedores,modificarProveedor);
                red.modificar(proveedores, red.modificarProveedor);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
        case 8:
            try {
                red.borrar(proveedores);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
                red.borrar(proveedores);
            }
            break;
        case 9:
            //mostrarSucursales();
            red.mostrarSucursales();
            break;
        case 10:
            red.agregarSucursal();
            break;
        case 11:
            try {
                //modificarSucursal(ReadlineSync.question("Ingrese el ID a modificar: "));
                //modificar(sucursales,modificarSucursal);
                red.modificar(sucursales, red.modificarSucursal);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
            break;
            case 12:
                try {
                    red.borrar(sucursales);
                }
                catch (err) {
                    console.log("Dato Invalido: " + err.message);
                    red.borrar(sucursales);
                }
            break;
            case 13:
                red.mostrarRed();
            break;

    }

}
console.log("Usted ha salido del programa");