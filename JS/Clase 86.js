// Para agregar una nueva propiedad para todos los objetos sin necesidad de hacer en la funcion constructor
// podemos usar el prototype

function Persona(nombre,apellido,email) {
    this.nombre = nombre; 
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}
// Anadiendo una nueva propiedad para todos los objetos y agregando un valor default.
Persona.prototype.tel = '983697059';

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
let madre = new Persona('Leyanny', 'Anez', 'leyannya@gmail.com');

console.log(padre,madre);

