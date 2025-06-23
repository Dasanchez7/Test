function Persona(nombre,apellido,email) {
    this.nombre = nombre; 
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}
// para hcer cualquier tipo de cambio u agregar metodos, hacerlo en el metodo constructor
// de otra forma si lo hacemos sobre las variables que apuntan a un objeto en especifico no cambia todos.

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
let madre = new Persona('Leyanny', 'Anez', 'leyannya@gmail.com');

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

