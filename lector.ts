//Importo las clases necesarias
import Sucursal from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'

//Importo la libreria que voy a utilizar
import * as fs from 'fs';

// Creo la clase "GestorDeArchivos" que permite leer un archivo de texto y separar la informacion al encontrar un ";"
export default class GestorDeArchivos {
    private arregloTxt :string[];

    public constructor(txtFileLocation :string) {
        let archivoTxt :string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloTxt = archivoTxt.split(';');    
    }

    public getArregloTxt() :string[] {
        return this.arregloTxt;
    }
}

//Función para cargar los datos de los clientes en el txt correspondiente
export let cargarClientes = (datos :string, arreglo: Array<Cliente>) :void => {
    //Creo un arreglo temporal donde separo los datos que hay en el objeto de tipo "GestorDeArchivos" en donde se encuentre una ","
    let listaDeDatosAux :string[] = datos.split(',');
    //Asigno la primer posición del arreglo a la variable nombre
    let nombre: string = listaDeDatosAux[0];
    //Asigno la segunda posición del arreglo a la variable telefono
    let telefono: number = Number(listaDeDatosAux[1]);
    //Asigno la tercer posición del arreglo a la variable id
    let id: string = listaDeDatosAux[2];
    //Creo el objeto "nuevoCliente" con la informacion de las variables anteriores
    let nuevoCliente : Cliente = new Cliente (nombre, telefono, id);
    //Ingreso el cliente al arreglo correspondiente
    arreglo.push(nuevoCliente);
}

//Función para cargar los datos de los pacientes en el txt correspondiente
export let cargarPacientes = (datos :string, arreglo: Array<Paciente>) :void => {
    //Creo un arreglo temporal donde separo los datos que hay en el objeto de tipo "GestorDeArchivos" en donde se encuentre una ","
    let listaDeDatosAux :string[] = datos.split(',');
    //Asigno la primer posición del arreglo a la variable nombre
    let nombre: string = listaDeDatosAux[0];
    //Asigno la segunda posición del arreglo a la variable especie
    let especie: string = listaDeDatosAux[1];
    //Asigno la tercer posición del arreglo a la variable id
    let id: string = listaDeDatosAux[2];
    //Creo el objeto "nuevoPaciente" con la informacion de las variables anteriores
    let nuevoPaciente : Paciente = new Paciente (nombre, especie, id);
    //Ingreso el paciente al arreglo correspondiente
    arreglo.push(nuevoPaciente);
}

//Función para cargar los datos de los proveedor en el txt correspondiente
export let cargarProveedor = (datos :string, arreglo: Array<Proveedor>) :void => {
    //Creo un arreglo temporal donde separo los datos que hay en el objeto de tipo "GestorDeArchivos" en donde se encuentre una ","
    let listaDeDatosAux :string[] = datos.split(',');
    //Asigno la primer posición del arreglo a la variable nombre
    let nombre: string = listaDeDatosAux[0];
    //Asigno la segunda posición del arreglo a la variable telefono
    let telefono: number = Number(listaDeDatosAux[1]);
    //Asigno la tercer posición del arreglo a la variable id
    let id: string = listaDeDatosAux[2];
    //Creo el objeto "nuevoProveedor" con la informacion de las variables anteriores
    let nuevoProveedor : Proveedor = new Proveedor (nombre, telefono, id);
    //Ingreso el proveedor al arreglo correspondiente
    arreglo.push(nuevoProveedor);
}

//Función para cargar los datos de las sucursales en el txt correspondiente
export let cargarSucursal = (datos :string, arreglo: Array<Sucursal>) :void => {
    //Creo un arreglo temporal donde separo los datos que hay en el objeto de tipo "GestorDeArchivos" en donde se encuentre una ","
    let listaDeDatosAux :string[] = datos.split(',');
    //Asigno la primer posición del arreglo a la variable nombre
    let nombre: string = listaDeDatosAux[0];
    //Asigno la segunda posición del arreglo a la variable direccion
    let direccion: string = listaDeDatosAux[1];
    //Asigno la tercer posición del arreglo a la variable id
    let id: string = listaDeDatosAux[2];
    //Creo el objeto "nuevaSucursal" con la informacion de las variables anteriores
    let nuevaSucursal : Sucursal = new Sucursal (nombre, direccion, id);
    //Ingreso la sucursal al arreglo correspondiente
    arreglo.push(nuevaSucursal);
}