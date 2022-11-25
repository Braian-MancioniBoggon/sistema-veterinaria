//Importo las clase
import Veterinaria from './Clases/Veterinaria'
import Sucursal from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'
import GestorDeArchivos from './lector'

//Importo las funciones
import {separador} from './helpers';
import {cargarClientes, cargarPacientes, cargarProveedor, cargarSucursal} from './lector';

//Importo las librerias que voy a utilizar
import * as ReadlineSync from 'readline-sync';

//Creo los arreglos que voy a utilizar
export let sucursales :Array<Sucursal> = [];
export let proveedores :Array<Proveedor> = [];
export let clientes :Array<Cliente> = [];
export let pacientes :Array<Paciente> = [];

//Creo el objeto Veterinaria
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

//Creo la variable que voy a utilizar para la selección en el menu
let opcion: number = -1;

//Asignacion de sucursal a lientes como ejemplo
red.asignarSucursalEjemplo("1346","Tu mascota");
red.asignarSucursalEjemplo("2546","Compania de mascotas");
red.asignarSucursalEjemplo("8461","Compania de mascotas");

//Menu
while (opcion != 0) {
    separador();
    console.log("1 - Mostrar clientes");
    console.log("2 - Cargar cliente")
    console.log("3 - Modificar cliente");
    console.log("4 - Borrar cliente");
    separador();
    console.log("5 - Mostrar pacientes");
    console.log("6 - Cargar paciente")
    console.log("7 - Modificar paciente");
    console.log("8 - Borrar paciente");
    separador();
    console.log("9 - Mostrar proveedores");
    console.log("10 - Cargar proveedor");
    console.log("11 - Modificar proveedor");
    console.log("12 - Borrar proveedor");
    separador();
    console.log("13 - Mostrar sucursales");
    console.log("14 - Mostrar información sucursal");
    console.log("15 - Cargar sucursal");
    console.log("16 - Modificar sucursal");
    console.log("17 - Modificar sucursal principal de un cliente");
    console.log("18 - Borrar sucursal");
    separador();
    console.log("19 - Mostrar toda la información de la red");
    console.log("20 - Solicitar turno");
    separador();
    console.log("0 - Salir");
    separador();

    //Pido el numero de la opción del menu
    opcion = (ReadlineSync.questionInt("Ingrese opcion: "));
    switch (opcion) {
        //Mostrar clientes
        case 1:
            red.mostrarClientes();
        break;
        //Agregar clientes
        case 2:
            red.agregarCliente();
        break;
        //Modificar clientes
        case 3:
            try {
                red.modificar(clientes, red.modificarCliente);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Borrar clientes
        case 4:
            try {
                red.borrar(clientes);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Mostrar pacientes
        case 5:
            red.mostrarPacientes();
        break;
        //Agregar paciente
        case 6:
            red.consultaDeCliente();
        break;
        //Modificar paciente
        case 7:
            try {
                red.modificar(pacientes, red.modificarPaciente);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Borrar paciente
        case 8:
            try {
                red.borrar(pacientes);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Mostrar proveedores
        case 9:
            red.mostrarProveedores();
        break;
        //Agregar proveedor
        case 10:
            red.agregarProveedor();
        break;
        //Modificar proveedor
        case 11:
            try {
                red.modificar(proveedores, red.modificarProveedor);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Borrar proveedor
        case 12:
            try {
                red.borrar(proveedores);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Mostrar sucursales
        case 13:
            red.mostrarSucursales();
        break;
        //Mostrar sucursal
        case 14:
            red.mostrarSucursal();
        break;
        //Agregar sucursal
        case 15:
            red.agregarSucursal();
        break;
        //Modificar sucursal
        case 16:
            try {
                red.modificar(sucursales, red.modificarSucursal);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Modificar sucursal principal de un cliente
        case 17:
            try {
                red.modificarSucursalPrincipal();
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Borrar sucursal
        case 18:
            try {
                red.borrar(sucursales);
            }
            catch (err) {
                console.log("Dato Invalido: " + err.message);
            }
        break;
        //Mostrar toda la información de la red
        case 19:
            red.mostrarRed();
        break;
        //Registrar visitas
        case 20:
            red.registrarVisita();
        break;
    };
};
console.log("");
console.log("Usted ha salido del programa");