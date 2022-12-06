//Función para hacer un separador en la consola
export let separador = () :void => {
    let guion :string = "-";
    for (let guiones :number = 0; guiones<50; guiones++){
        guion += "-";
    }

    console.log(guion);
}

//Funcion para poner la primer letra de un string en mayuscula
export let primeraLetraMayuscula = (texto :string) :string =>{
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }