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