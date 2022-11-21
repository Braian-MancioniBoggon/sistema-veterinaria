//Importo las clases
import Sucursal from './Sucursal'
import Proveedor from './Proveedor'
import Cliente from './Cliente'
import Paciente from './Paciente'
import ErrorId from './ErrorId'

//Importo las librerias que voy a utilizar
import * as ReadlineSync from 'readline-sync';

//Importo las funciones
import {pacientes} from '../index';

//Creo la clase Veterinaria
export default class Veterinaria {
    private sucursales :Array <Sucursal>;
    private listaProveedores :Array <Proveedor>;
    private listaClientes :Array <Cliente>;
    private listaPacientes :Array <Paciente>;
    private idPaciente :string;
    private intentos :number;
    private posicionArreglo: number;

    public constructor(sucursales :Array <Sucursal>, listaProveedores :Array <Proveedor>, listaClientes :Array <Cliente>, listaPacientes :Array <Paciente>) {
        this.sucursales = sucursales;
        this.listaProveedores = listaProveedores;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
        this.idPaciente = "";
        this.intentos = 0;
        this.posicionArreglo = 0;
    }

    //Metodo para mostrar sucursales
    public mostrarSucursales() :void {
        console.log("");
        //Recorro el arreglo que contiene las sucursales y las voy mostrando por consola
        for (let i :number = 0; i < this.sucursales.length; i++){
            console.log("Nombre: " + this.sucursales[i].getNombre());
            console.log("Direccion: " + this.sucursales[i].getDireccion());
            console.log("ID: " + this.sucursales[i].getId());
            console.log("");
        };
    }

    //Metodo para mostrar proveedores
    public mostrarProveedores() :void {
        console.log("");
        //Recorro el arreglo que contiene los proveedores y los voy mostrando por consola
        for (let i :number = 0; i < this.listaProveedores.length; i++){
            console.log("Nombre: " + this.listaProveedores[i].getNombre());
            console.log("Telefono: " + this.listaProveedores[i].getTelefono());
            console.log("ID: " + this.listaProveedores[i].getId());
            console.log("");
        }
    }

    //Metodo para mostrar clientes y sus respectivas mascotas
    public mostrarClientes() :void {
        console.log("");
        //Recorro el arreglo que contiene los clientes y los voy mostrando por consola
        for (let i :number = 0; i < this.listaClientes.length; i++){
            console.log("Nombre: " + this.listaClientes[i].getNombre());
            console.log("Telefono: " + this.listaClientes[i].getTelefono());
            console.log("ID: " + this.listaClientes[i].getId());
            this.listaClientes[i].getVip();
            console.log("Cantidad de mascotas: " + this.listaClientes[i].cantidadMascotas())
            console.log("Mascotas: ");
            //Llamo al metodo mostrarMascotas de la clase Cliente para mostrar las mascotas que estan a cargo del cliente
            this.listaClientes[i].mostrarMascotas();
            console.log("");
        };
    }

    //Metodo para mostrar pacientes
    public mostrarPacientes() :void {
        console.log("");
        //Recorro el arreglo que contiene los pacientes y los voy mostrando por consola
        for (let i :number = 0; i < this.listaPacientes.length; i++){
            console.log("Nombre: " + this.listaPacientes[i].getNombre());
            console.log("Especie: " + this.listaPacientes[i].getEspecie());
            console.log("ID: " + this.listaPacientes[i].getId());
            console.log("");
        };
    }

    //Este metodo muestra toda la información que hay en la red de veterinarias
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

    /*Metodo para modificar objetos, se tiene que pasar como parametros el arreglo
    y el metodo "modificar" correspondiente al tipo de objeto se quiere modificar*/
    public modificar(lista, modificarObjeto) {
        console.log("");
        //Pido el ID de lo que se quiera modificar
        let eleccionId: string = ReadlineSync.question("Ingrese el ID a modificar: ");
        //Declaro la variable que voy a utilizar para encontrar y modificar el objeto deseado
        let coincidencia: number = 0;
        //Declaro la variable donde se va a guardar la posicion del cliente en el arreglo de clientes
        let cliente: number = 0;
        /*Consulto si lo que quiero modificar es un paciente porque las mascotas tienen el ID del dueño
        y si hay mas de una mascota necesito un segundo dato para saber cual modificar*/
        if (lista === pacientes) {
           //Reviso en el arreglo correspondiente para ver si hay coincidencia
            for (let i: number = 0; i < lista.length; i++) {
                //Si hay coincidencia asigno a la variable "coincidencia" el valor 1 demostrando que el ID fue encontrado
                if (eleccionId === lista[i].getId()) {
                    coincidencia = 1;
                };
            };
            //Si hay coincidencia
            if (coincidencia === 1) {
                //Recorro el areglo de clientes para buscar y guardar la posicion del cliente ingresado
                for (let i: number = 0; i < this.listaClientes.length; i++) {
                    if (eleccionId === this.listaClientes[i].getId()) {
                        cliente = i;
                    };
                };
                console.log("Las mascotas a cargo del cliente " + this.listaClientes[cliente].getNombre() + " son: ");
                //Muestro las mascotas a cargo del cliente
                this.listaClientes[cliente].mostrarMascotas();
                console.log("");
                //Se reinicia el contador de intentos
                this.intentos = 0;
                //Se llama al metodo validarMascota para verificar la mascota a editar
                this.validarNombreMascota(eleccionId);
            } 
        //En el caso que se quiera editar otra cosa
        } else {
            //Reviso en el arreglo correspondiente para ver si hay coincidencia
            for (let i: number = 0; i < lista.length; i++) {
                //Si hay coincidencia asigno a las variables "coincidencia" y "posicionArreglo" los valores necesarios para realizar la modificación
                if (eleccionId === lista[i].getId()) {
                    coincidencia = 1;
                    this.posicionArreglo = i;
                };
            };
        };
        //Si hay coincidencia
        if (coincidencia === 1) {
            //Se reinicia el contador de intentos
            this.intentos=0;
            let objetoModificado;
            //Creo un nuevo objeto con los datos actualizados para reemplazar el objeto original
            objetoModificado = modificarObjeto(lista[(this.posicionArreglo)].getId());
            //Borro el objeto original
            delete lista[this.posicionArreglo];
            //Coloco el objeto nuevo en su lugar
            lista[this.posicionArreglo] = objetoModificado;
            console.log("");
            console.log("Modificado exitosamente");
        //Si no hay coincidencia hay 3 intentos hasta que se ingrese un ID valido
        } else if (this.intentos < 2){
            console.log("");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            //Se van sumando los intentos
            this.intentos++;
            //Se vuelve a llamar al metodo modificar para realizar otro intento
            this.modificar(lista,modificarObjeto); 
        //Si se superan los 3 intentos
        } else if (this.intentos >= 2){
            //Se reinicia el contador de intentos y se vuelve al menu
            this.intentos=0;
            console.log("");
            throw new ErrorId("El nombre no se encuentra en la base de datos");
        };
    }

    //Metodo para validar el nombre de mascota ingresado
    public validarNombreMascota(eleccionId :string) {
        let coincidencia :number = 0;
        //Se reinicia el contador de intentos
        this.posicionArreglo = 0;
        console.log("");
        //Pido el nombre de la mascota
        let eleccionNombre: string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
        //Reviso en el arreglo de pacientes para ver si hay coincidencia
        for (let i: number = 0; i < this.listaPacientes.length; i++) {
            //Si hay coincidencia asigno a las variables "coincidencia" y "posicionArreglo" los valores necesarios para localizar la mascota
            if (eleccionId === this.listaPacientes[i].getId() && eleccionNombre === this.listaPacientes[i].getNombre()) {
                coincidencia = 1;
                this.posicionArreglo = i;
            };
        //Si hay coincidencia
        }if (coincidencia === 1) {
            //Se reinicia el contador de intentos
            this.intentos = 0;
        //Si no hay coincidencia hay 3 intentos hasta que se ingrese un ID valido
        } else if (this.intentos < 2){
            //Se van sumando los intentos
            this.intentos++;
            console.log("");
            console.log("No se encuentra dicho nombre de mascota, restan " + (3 - this.intentos) + " intentos.");
            //Se vuelve a llamar al metodo validaMascota para realizar otro intento
            this.validarNombreMascota(eleccionId);
        //Si se superan los 3 intentos
        } else if (this.intentos >= 2){
            //Se reinicia el contador de intentos y se vuelve al menu
            this.intentos = 0;
            console.log("");
            throw new ErrorId("El ID no se encuentra en la base de datos");
        };
    }



    //Metodo para modificar clientes
    public modificarCliente (idOriginal) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del cliente: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
        let id :string = idOriginal;
        let clienteModificado : Cliente = new Cliente(nombre, telefono, id);
        
        return clienteModificado;
    }

    //Metodo para modificar pacientes
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

    //Metodo para proveedores 
    public modificarProveedor (idOriginal: string) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre del proveedor: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el nuevo numero de telefono: "));
        let id :string = idOriginal;
        let proveedorModificado : Proveedor = new Proveedor(nombre, telefono, id);
    
        return proveedorModificado;
    }

    //Metodo para modificar sucursales
    public modificarSucursal (idOriginal: string) {
        let nombre :string = ReadlineSync.question("Ingrese el nuevo nombre nombre de sucursal: ");
        let direccion :string = ReadlineSync.question("Ingrese la nueva direccion: ");
        let id :string = idOriginal;
        let sucursalModificado : Sucursal = new Sucursal(nombre, direccion, id);
    
        return sucursalModificado;
    }

    /*Metodo para borrar objetos, se tiene que pasar como parametros el arreglo
    correspondiente al tipo de objeto se quiere borrar*/
    public borrar(lista) {
        console.log("");
        //Pido el ID de lo que se quiera borrar
        let eleccionId: string = ReadlineSync.question("Ingrese el ID a modificar: ");
        //Declaro la variable que voy a utilizar para encontrar y borrar el objeto deseado
        let coincidencia: number = 0;
        //Declaro la variable donde se va a guardar la posicion del cliente en el arreglo de clientes
        let cliente: number = 0;
        /*Consulto si lo que quiero borrar es un paciente porque las mascotas tienen el ID del dueño
        y si hay mas de una mascota necesito un segundo dato para saber cual borrar */
        if (lista === pacientes) {
           //Reviso en el arreglo correspondiente para ver si hay coincidencia
            for (let i: number = 0; i < lista.length; i++) {
                //Si hay coincidencia asigno a la variable "coincidencia" el valor 1 demostrando que el ID fue encontrado
                if (eleccionId === lista[i].getId()) {
                    coincidencia = 1;
                };
            };
            //Si hay coincidencia
            if (coincidencia === 1) {
                //Recorro el areglo de clientes para buscar y guardar la posicion del cliente ingresado
                for (let i: number = 0; i < this.listaClientes.length; i++) {
                    if (eleccionId === this.listaClientes[i].getId()) {
                        cliente = i;
                    };
                };
                console.log("Las mascotas a cargo del cliente " + this.listaClientes[cliente].getNombre() + " son: ");
                //Muestro las mascotas a cargo del cliente
                this.listaClientes[cliente].mostrarMascotas();
                console.log("");
                //Se reinicia el contador de intentos
                this.intentos = 0;
                //Se llama al metodo validarMascota para verificar la mascota a borrar
                this.validarNombreMascota(eleccionId);
            }
        //En el caso que se quiera borrar otra cosa
        } else {
            //Reviso en el arreglo correspondiente para ver si hay coincidencia
            for (let i: number = 0; i < lista.length; i++) {
                //Si hay coincidencia asigno a las variables "coincidencia" y "posicionArreglo" los valores necesarios para borrar el objeto
                if (eleccionId === lista[i].getId()) {
                    coincidencia = 1;
                    this.posicionArreglo = i;
                };
            };
        };
        //Si hay coincidencia
        if (coincidencia === 1) {
            //Se reinicia el contador de intentos
            this.intentos = 0;
            //Elimino la posición correspondiente del arreglo
            lista.splice(this.posicionArreglo, 1);
            console.log("");
            console.log("El ID fue eliminado exitosamente!")
        //Si no hay coincidencia hay 3 intentos hasta que se ingrese un ID valido
        } else if (this.intentos < 2){
            console.log("");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            //Se van sumando los intentos
            this.intentos++;
            //Se vuelve a llamar al metodo borrar para realizar otro intento
            this.borrar(lista);  
        } else if (this.intentos >= 2){
            //Se reinicia el contador de intentos y se vuelve al menu
            this.intentos = 0;
            console.log("");
            throw new ErrorId("El ID no se encuentra en la base de datos");
        };
    }
             
    /*Metodo para generar un ID y corroborar que sea unico , se tiene que pasar como parametros el arreglo
    correspondiente al tipo de objeto que se le va a asignar un ID*/
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

    //Metodo para agregar clientes
    public agregarCliente () :void {
        console.log("");
        let nombre :string = ReadlineSync.question("Ingrese el nombre del cliente: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
        //Genero un ID unico para el cliente
        let id :string = this.generarId(this.listaClientes);
        //pido la cantidad de mascotas
        let mascotas :number = ReadlineSync.questionInt("Cantidad de mascotas: ");
        //Agrego un nuevo paciente por cada mascota que tenga el cliente
        for (let i :number = 0; i < mascotas; i++){
            let nombreMascota :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
            //Pido la especie de la mascota
            let especieMascota :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
            //Si no es perro o gato siempre va a aparecer como exotica
            if (especieMascota != "perro"){
                if (especieMascota !== "gato"){
                    if (especieMascota !== "exotica"){
                        especieMascota = "exotica";
                    };
                };
            };
            //Asigno el ID del cliente a la mascota
            let idMascota :string = id;
            let nuevoPaciente : Paciente = new Paciente(nombreMascota, especieMascota, idMascota);
    
            this.listaPacientes.push(nuevoPaciente);
        }
        let nuevoCliente : Cliente = new Cliente(nombre, telefono, id);
        console.log("");
        //Despues de crear el cliente muestro su ID
        console.log("Su ID es: " + id);
    
        this.listaClientes.push(nuevoCliente);
    }

    //Metodo para agregar pacientes
    public agregarPaciente () :void {
        console.log("");
        let nombre :string = ReadlineSync.question("Ingrese el nombre de la mascota: ");
        //Pido la especie de la mascota
        let especie :string = ReadlineSync.question("Ingrese la especie de la mascota (perro/gato/exotica):");
        //Si no es perro o gato siempre va a aparecer como exotica
        if (especie !== "perro"){
            if (especie !== "gato"){
                if (especie !== "exotica"){
                    especie = "exotica";
                };
            };
        };
        //Asigno el ID del cliente a la mascota
        let id :string = this.idMascota();
        if (id !== ""){
            let nuevoPaciente : Paciente = new Paciente(nombre, especie, id);
            this.listaPacientes.push(nuevoPaciente);
        };
    }
    
    //Metodo para asignarle el ID de un cliente a su mascota
    public idMascota () {
        //Pido el ID del cliente
        let idCliente :string = ReadlineSync.question("Ingrese el ID del dueno: ");
        //Declaro las dos variables que voy a utilizar para encontrar al cliente y registrar su visita
        let coincidencia :number = 0;
        let posicionArreglo :number = 0;
        //Recorro el arreglo de clientes para ver si hay coincidencia
        for (let i :number = 0; i < this.listaClientes.length; i++){
            //Si hay coincidencia asigno el id a la variable "idCliente"
            if (idCliente === this.listaClientes[i].getId()){
                //this.idPaciente = this.listaClientes[i].getId();
                coincidencia = 1;
                posicionArreglo = i;
            };
        };
        
        if (coincidencia === 1) {
            this.idPaciente = this.listaClientes[posicionArreglo].getId();
        } else if (this.intentos < 2){
            console.log("");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            //Se van sumando los intentos
            this.intentos++;
            //Se vuelve a llamar al metodo idMascota para realizar otro intento
            this.idMascota();
        //Si se superan los 3 intentos
        } else {
            //Se reinicia el contador de intentos y se vuelve al menu
            this.intentos = 0;
            console.log("");
            console.log("Limite de intentos exedido");
        };

        /*
        //Si la variable "idCliente" esta vacia se muestra que el ID es invalido
        if (this.idPaciente === ""){
            console.log("ID invalido");
            this.idMascota();
        };
        */
        
        //Devuelvo el contenido de "idCliente" para ser asignado como ID de la mascota
        return this.idPaciente;
    }

    //Metodo para agregar proveedores
    public agregarProveedor () :void {
        console.log("");
        let nombre :string = ReadlineSync.question("Ingrese el nombre del proveedor: ");
        let telefono :number = Number(ReadlineSync.question("Ingrese el numero de telefono: "));
        //Genero un ID unico para el proveedor
        let id :string = this.generarId(this.listaProveedores);
        let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
    
        this.listaProveedores.push(nuevoProveedor);
        //Despues de crear el proveedor muestro su ID
        console.log("Su ID de proveedor es: " + id);
    }

    //Metodo para agregar sucursales
    public agregarSucursal () :void {
        console.log("");
        let nombre :string = ReadlineSync.question("Ingrese el nombre de sucursal: ");
        let direccion :string = ReadlineSync.question("Ingrese direccion: ");
        //Genero un ID unico para la sucursal
        let id :string = this.generarId(this.sucursales);
        let nuevoSucursal: Sucursal = new Sucursal(nombre, direccion, id);
    
        this.sucursales.push(nuevoSucursal);
        //Despues de crear la sucursal muestro su ID
        console.log("Su ID de sucursal es: " + id);
    }

    //Metodo para registrar visitas de clientes
    public registrarVisita() :void {
        console.log("");
        //Pido el ID del cliente que va a registrar su visita
        let id :string = ReadlineSync.question("Ingrese el ID del cliente: ");
        //Declaro las dos variables que voy a utilizar para encontrar al cliente y registrar su visita
        let coincidencia :number = 0;
        let posicionArreglo :number = 0;
        //Reviso en el arreglo de clientes para ver si hay coincidencia
        for (let i :number = 0; i < this.listaClientes.length; i++){
            //Si hay coincidencia asigno a las variables "coincidencia" y "posicionArreglo" los valores necesarios para registrar su visita
            if (id === this.listaClientes[i].getId()){
                coincidencia = 1;
                posicionArreglo = i;
            };
        };
        //Si hay coincidencia
        if (coincidencia === 1){
            //Llamo al metodo obtenerVip de la clase Cliente
            this.listaClientes[posicionArreglo].obtenerVip();
            console.log("");
            //Indico la cantidad de visitas registradas que tiene el cliente utilizando los metodos getNombre y getRegistroVisitas de la clase Cliente
            console.log("El cliente " + this.listaClientes[posicionArreglo].getNombre() + " tiene un total de " + this.listaClientes[posicionArreglo].getRegistroVisitas() + " visitas");
            //Utilizo el metodo getVip para mostrar si el cliente es Vip o no
            this.listaClientes[posicionArreglo].getVip();
        //Si no hay coincidencia hay 3 intentos hasta que se ingrese un ID valido
        }  else if (this.intentos < 2){
            console.log("");
            console.log("No se encuentra en la base de datos, restan " + (2 - this.intentos) + " intentos.");
            //Se van sumando los intentos
            this.intentos++;
            //Se vuelve a llamar al metodo registrarVisita para realizar otro intento
            this.registrarVisita();
        //Si se superan los 3 intentos
        } else {
            //Se reinicia el contador de intentos y se vuelve al menu
            this.intentos = 0;
            console.log("");
            console.log("Limite de intentos exedido");
        };
    }
}