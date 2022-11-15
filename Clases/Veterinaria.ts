//Importo las clases
import SucursalVeterinaria from './Sucursal'
import Proveedor from './Proveedor'
import Cliente from './Cliente'
import Paciente from './Paciente'

//Creo la clase Veterinaria
export default class Veterinaria {
    private sucursales :Array <SucursalVeterinaria>;
    private listaProveedores :Array <Proveedor>;
    private listaClientes :Array <Cliente>;
    private listaPacientes :Array <Paciente>;

    public constructor(sucursales :Array <SucursalVeterinaria>, listaProveedores :Array <Proveedor>, listaClientes :Array <Cliente>, listaPacientes :Array <Paciente>) {
        this.sucursales = sucursales;
        this.listaProveedores = listaProveedores;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
    }

    public getSucursales() :void {
        console.log(this.sucursales);
    }

    public getListaProveedores() :void {
        console.log(this.listaProveedores);
    }

    public getListaClientes() :void {
        console.log(this.listaClientes);
    }

    public getListaPacientes() :void {
        console.log(this.listaPacientes);
    }
}