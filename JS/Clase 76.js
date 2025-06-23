// agregar metodos a obj en js
// se agrega igual que como fuera un propiedad mas del obj
// y para hacer uso de los atributos dentro de un obj se usa this (operador variable)
// que apunta al obj dentro del que se esta trabajando

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());
// como si fuera una funcion sin parametros
