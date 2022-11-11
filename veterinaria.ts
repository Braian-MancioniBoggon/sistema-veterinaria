import Cliente from './class/cliente'
import Paciente from './class/Paciente'
import Proveedor from './class/Proveedor'
import Sucursal from './class/Sucursal'
import {altaCliente, bajaCliente, modificarCliente, altaPacientes, bajaPaciente, modificarPaciente, altaVeterinaria, bajaVeterinaria, modificarVeterinaria,
        altaProveedor, bajaProveedor, modificarProveedor, generarId } from './helpers';



let cliente :Cliente[] = [];
let paciente :Paciente[] = [];
let proveedor :Proveedor[] = [];
let sucursal :Sucursal[] = [];

