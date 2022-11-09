//Importo las clase
import Sucursal from './Clases/Sucursal'
import Proveedor from './Clases/Proveedor'
import Cliente from './Clases/Cliente'
import Paciente from './Clases/Paciente'

//Importo las librerias que voy a utilizar
import * as fs from 'fs';

// Creo la clase "GestorLibros" que permite leer un archivo de texto
export default class GestorDeArchivos {
    private arregloTxt :string[];

    public constructor(txtFileLocation :string) {
        let archivoTxt :string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloTxt = archivoTxt.split(';');    
    }

    public mostrarArreglo() :void {
        console.log(this.arregloTxt);
    }

    public getArregloTxt() :string[] {
        return this.arregloTxt;
    }
}

//Función para cargar los datos de los clientes en el txt correspondiente
export let cargarClientes = (datos :string, arreglo: Array<Cliente>) :void => {
    let listaDeDatosAux :string[] = datos.split(',');
    let nombre: string = listaDeDatosAux[0];
    let telefono: number = Number(listaDeDatosAux[1]);
    let id: string = listaDeDatosAux[2];
    let nuevoCliente : Cliente = new Cliente (nombre, telefono, id);

    arreglo.push(nuevoCliente);
}

//Función para cargar los datos de los pacientes en el txt correspondiente
export let cargarPacientes = (datos :string, arreglo: Array<Paciente>) :void => {
    let listaDeDatosAux :string[] = datos.split(',');
    let nombre: string = listaDeDatosAux[0];
    let especie: string = listaDeDatosAux[1];
    let id: string = listaDeDatosAux[2];
    let nuevoPaciente : Paciente = new Paciente (nombre, especie, id);

    arreglo.push(nuevoPaciente);
}

//Función para cargar los datos de los proveedor en el txt correspondiente
export let cargarProveedor = (datos :string, arreglo: Array<Proveedor>) :void => {
    let listaDeDatosAux :string[] = datos.split(',');
    let nombre: string = listaDeDatosAux[0];
    let telefono: number = Number(listaDeDatosAux[1]);
    let id: string = listaDeDatosAux[2];
    let nuevoProveedor : Proveedor = new Proveedor (nombre, telefono, id);

    arreglo.push(nuevoProveedor);
}

//Función para cargar los datos de las sucursales en el txt correspondiente
export let cargarSucursal = (datos :string, arreglo: Array<Sucursal>) :void => {
    let listaDeDatosAux :string[] = datos.split(',');
    let nombre: string = listaDeDatosAux[0];
    let direccion: string = listaDeDatosAux[1];
    let id: string = listaDeDatosAux[2];
    let nuevaSucursal : Sucursal = new Sucursal (nombre, direccion, id);

    arreglo.push(nuevaSucursal);
}