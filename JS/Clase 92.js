// Hoisting y clases
// primero se declara la clase para poderla utilizar
// de lo contrario las funciones las podemos mandar a llamar y despues declararla
// NO ES POSIBLE CREAR OBJETOS ANTES DE DECLARAR LA CLASE

let persona1 = new Persona('Diego','Sanchez');

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
     
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
        // se asigna la variable que recibimos como parametro al atributo de la clase
    }

}
       