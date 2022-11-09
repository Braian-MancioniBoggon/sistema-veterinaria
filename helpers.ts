//Función para crear y verificar el ID
export let generarId = (lista) => {
    let idGenerado :string = "";
    for (let i :number = 0; i < 4; i++){
        let random :number = Math.floor(Math.random() * 10);
        idGenerado += random;
    };
    for (let i :number = 0; i < lista.length; i++){
        if (idGenerado === lista[i].getId()){
            generarId(lista);
        }
    };

    return idGenerado;
}