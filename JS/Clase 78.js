let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona["nombre"]);

// ciclo for in para acceder a un objeto

for(nombrePropiedad in persona) {
    console.log (nombrePropiedad); // para acceder al nombre de las propiedades
    console.log (persona[nombrePropiedad]); // para acceder a su valor

}
// λ significa que es una funcion 