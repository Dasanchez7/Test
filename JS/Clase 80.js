let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Diferentes formas de imprimir los valores de obj

// concatenando cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

// for in
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad,);
    console.log(persona[nombrePropiedad])
    console.log(nombrePropiedad,persona[nombrePropiedad]);   

}

let personaArray = Object.values(persona); // regresa el obj como un array
console.log(personaArray);

let personaString = JSON.stringify(persona); // lo convierte en cadena cada valor
console.log(personaString);
