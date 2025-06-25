// Clase es una plantilla de objetos
// posee metodos y atributos PERO NO VALORES

// Un objeto es una instancia de una clase con los VALORES
// VER IMAGEN ESTRUCTURA DE CLASES 
// Cada objeto tiene sus propios valores salvo algunas excepciones

class Persona{
    // se usa un metodo constructor para iniciar los atributos de nuestra clase
    // si no se define un constructor, JS crea uno por defecto en vacio
    constructor(nombre,apellido){
        // estamos creando una nueva propiedad a la clase
        this.nombre = nombre;
        // nombre del parametro y el valor del argumento que estamos recibiendo
        this.apellido = apellido;
    }
}
            // aca se manda a llamar el constructor
let persona1 = new Persona('Diego','Sanchez');
// Crea un objeto persona 1 con la clase persona
console.log(persona1);