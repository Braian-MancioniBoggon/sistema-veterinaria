export default class ErrorId extends Error{
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorValidacion";
    }
}